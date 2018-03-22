import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'
import request from 'superagent'

const today = moment().format('YYYY-MM-DD').toString()
console.log('today', today)
const db = remoteConfig.database

const config = {
    api: "http://localhost:3000/api/v1",
    form: '/forms'
}

class FormAPI {

    constructor() { }

    init () {
        this._formsDB = db.forms
        this._setTodayFormDB()
    }

    _setTodayFormDB () {
        let todayForm = []
        request
            .get(config.api + config.form + '/' + this._formsDB)
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
        payload.createDate = new Date().getTime()
        payload.formDate = today
        request
            .post(config.api + config.form)
            .send({ formID: this._formsDB, insertData: payload })
            .end((err, result) => {
                this._setTodayFormDB()
                console.log('createNewForm, finished')
                callback()
            })
    }

    async updateForm (key, payload, callback) {
        request
            .put(config.api + config.form)
            .send({ formID: this._formsDB, updataData: payload, key: key })
            .end((err, result) => {
                this._setTodayFormDB()
                console.log('updateForm, finished')
                callback()
            })
    }

    getDownloadLink (imageUrl) {

    }
}

export default new FormAPI()