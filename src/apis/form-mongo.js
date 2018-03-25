import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import request from 'superagent'
import Socket from './socket'
import TimeUtils from '../utils/time-utils'
import { SocketAPI } from './index'
import IndexDB from '../offline/indexDB' // change to controller

const today = TimeUtils.substractDayToDBFormate(0)

class FormAPI {

    constructor() { }

    init () {
        Utils.isOnline() ? this._setRemoteDB() : this._getContentFromIndexDB()
        this._registerService()
    }

    _setRemoteDB () {
        SocketAPI.getForms(today)
    }

    __getContentFromIndexDB () {
        IndexDB.get('forms').then(forms => {
            store.commit('setForms', forms)
        })
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        // window.addEventListener('offline', this._offline.bind(this))
    }

    async _online () {
        this._setRemoteDB()
        const tempForms = await IndexDB.get('tempForms')
        const isTempExist = tempForms && tempForms.length > 0

        if (!isTempExist) { return }

        tempForms.map(form => {
            console.log('online form', form)
            // if (form.key) {
            //     const key = form.key
            //     delete form.key
            //     this._formsDB.child(today).child(key).set(form)
            // } else {
            //     this._formsDB.child(today).push(form)
            // }
        })

        // IndexDB.delete('tempForms')
        // IndexDB.delete('forms')
    }

    _offline () {
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
            Socket.createNewForm(payload)
        }
        setTimeout(() => {
            callback()
        }, 2000);
    }

    async updateForm (key, payload, callback) {
        Socket.updateOldForm(key, payload)
        setTimeout(() => {
            callback()
        }, 2000);
    }

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

        //console.log ('tempFormClone', tempFormClone)
        IndexDB.set('tempForms', tempFormClone)
    }
}

export default new FormAPI()