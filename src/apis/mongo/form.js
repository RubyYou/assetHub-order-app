import store from '../../store/index'
import { remoteConfig } from '../../utils/db-config'
import Utils from '../../utils/utils'
import request from 'superagent'
import TimeUtils from '../../utils/time-utils'
import { SocketAPI } from '../index'
import IndexDB from '../../offline/indexDB' // change to controller

const today = TimeUtils.substractDayToDBFormate(0)

class FormAPI {

    constructor() { }

    init () {
        Utils.isOnline() ? this._connectRemoteDB() : this._getContentFromIndexDB()
        this._registerService()
    }

    _connectRemoteDB () {
        SocketAPI.getForms(today)
    }

    _getContentFromIndexDB () {
        IndexDB.get('forms').then(forms => {
            store.commit('setForms', forms)
        })
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        window.addEventListener('offline', this._offline.bind(this))
    }

    async _online () {
        this._connectRemoteDB()
        //alert ('use remote service, delete offline stuff')
        const tempForms = await IndexDB.get('tempForms')
        const isTempExist = tempForms && tempForms.length > 0

        if (!isTempExist) { return }

        tempForms.map(form => {
            if (form._id) {
                const key = form._id
                delete form._id
                SocketAPI.updateOldForm(key, form)
            } else {
                SocketAPI.createNewForm(form)
            }
        })

        IndexDB.delete('tempForms')
        IndexDB.delete('forms')
    }

    _offline () {
        //alert ('start offline storage')
        // shallow clone
        const forms = JSON.parse(JSON.stringify(store.getters.todayForms))
        IndexDB.set('forms', forms)
    }

    async createNewForm (payload, callback) {
        payload.createDate = new Date().getTime().toString()
        payload.formDate = today
        if (!Utils.isOnline()) {
            await this._saveToIndexDB(null, payload)
        } else {
            SocketAPI.createNewForm(payload)
        }
        setTimeout(() => {
            callback()
        }, 2000);
    }

    async updateForm (key, payload, callback) {
        SocketAPI.updateOldForm(key, payload)
        setTimeout(() => {
            callback()
        }, 2000);
    }

    // not working
    async _saveToIndexDB (key, payload) {
        const tempForms = await IndexDB.get('tempForms') // array
        let tempFormClone = []
        if (tempForms && tempForms.length > 0) {
            tempFormClone = tempForms.slice(0)
        }

        let repeatedItem = tempFormClone.find(item => { return item.key === key })
        if (repeatedItem) {
            repeatedItem = payload;
        } else {
            tempFormClone.push(payload)
        }

        IndexDB.set('tempForms', tempFormClone)
    }
}

export default new FormAPI()