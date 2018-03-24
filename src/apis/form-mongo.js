import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import request from 'superagent'
import Socket from './socket'
import TimeUtils from '../utils/time-utils'

const today = TimeUtils.substractDayToDBFormate(0)
const db = remoteConfig.database
const api = remoteConfig.api.url
const formAction = remoteConfig.api.actions.forms


class FormAPI {

    constructor() { }

    init () {
        this._formsDB = db.forms
        this._api = api
        this._formAction = formAction
        this.setTodayFormDB()
    }

    setTodayFormDB () {
        let todayForm = []
        request
            .get(this._api + this._formAction + '/' + this._formsDB)
            .query('toDay=' + today)
            .end((err, result) => {
                todayForm = result.body.results
                console.log('todayForm', todayForm)
                this._setDataToStore('setForms', todayForm)
            })
    }

    _setDataToStore (actionName, payload) {
        store.commit(actionName, payload)
    }

    async createNewForm (payload, callback) {
        payload.createDate = new Date().getTime().toString()
        payload.formDate = today
        Socket.createNewForm(payload)
        setTimeout(() => {
            callback()
        }, 2000);

        // request
        //     .post(config.api + config.form)
        //     .send({ formID: this._formsDB, insertData: payload })
        //     .end((err, result) => {
        //         this._setTodayFormDB()
        //         console.log('createNewForm, finished')
        //         callback()
        //     })
    }

    async updateForm (key, payload, callback) {
        Socket.updateOldForm(key, payload)
        setTimeout(() => {
            callback()
        }, 2000);
        // request
        //     .put(config.api + config.form)
        //     .send({ formID: this._formsDB, updataData: payload, key: key })
        //     .end((err, result) => {
        //         this._setTodayFormDB()
        //         console.log('updateForm, finished')
        //         callback()
        //     })
    }

    getDownloadLink (imageUrl) {

    }
}

export default new FormAPI()