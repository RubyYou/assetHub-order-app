import firebase from 'firebase'
import store from '../store/index'
import { messages } from '../utils/data'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'

const today = moment().format('l').split("/").join("-").toString()
const db = remoteConfig.database

class Loader {

    constructor () { }

    init () {
        this._messagesDB = firebase.database().ref (db.messages);
        this._formsDB = firebase.database().ref (db.forms);
        this._setDataToStore (db.messages, 'setMessages')
        this._setDataToStore (db.forms, 'setForms')
        this._setTodayFormDB ()
    }

    _setTodayFormDB () {
        const todayForm = this._formsDB.child (today)
        todayForm.once ('value', (snapshot) => {
            if (!snapshot.exists ()) {
                const firstNode = {"created": new Date().getTime ().toString ()}
                todayForm.set(firstNode)
            }
        })
    }

    _setDataToStore (dbName, actionName) {
        const databaseRef = firebase.database().ref(); // get FORM based on date INFO

        databaseRef.child (dbName).on ('value', (snapshots) => {
            let items = [];
            snapshots.forEach( snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data);
            });
            console.log('DB: ', dbName, snapshots.val());
            store.commit (actionName, items);
        });
    }


    async createNewForm (payload, callback) {
        payload.createDate = new Date ().getTime ()
        await this._formsDB.push (payload)
        console.log ('createNewForm, finished');
        callback ();
    }

    async updateForm (key, payload, callback) {
        this._formsDB.child (key).set (payload)
        console.log ('createNewForm, finished');
        callback ();
    }

    getDownloadLink (imageUrl) {

    }
}

export default new Loader ();