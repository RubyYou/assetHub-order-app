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
        const todayForm = []
        // request.get(config.api + config.form + this._formsDB).
        // const todayForm = this._formsDB.child(today)
        // todayForm.once('value', (snapshot) => {
        //     if (!snapshot.exists()) {
        //         const firstNode = { "created": new Date().getTime() }
        //         todayForm.set(firstNode)
        //     }
        this._setDataToStore(todayForm, 'setForms')
        // })
    }

    _setDataToStore (dbRef, actionName) {
        // dbRef.on('value', (snapshots) => {
        let items = [];
        //     snapshots.forEach(snap => {
        //         const data = Object.assign({}, snap.val(), { key: snap.key });
        //         if (data.key !== "created") {
        //             items.push(data);
        //         }
        //     });
        //     console.log('DB: ', actionName, snapshots.val());
        store.commit(actionName, items);
        // });
    }

    async createNewForm (payload, callback) {
        payload.createDate = new Date().getTime()
        payload.formDate = today
        console.log('payload', payload)
        // await this._formsDB.child(today).push(payload)
        // console.log('createNewForm, finished');
        callback();
    }

    async updateForm (key, payload, callback) {
        // await this._formsDB.child(today).child(key).set(payload)
        // console.log('updateForm, finished');
        callback();
    }

    getDownloadLink (imageUrl) {

    }
}

export default new FormAPI();