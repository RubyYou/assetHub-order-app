import firebase from 'firebase'
import store from '../store/index'
import { messages } from '../utils/data'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'

class Loader {

    constructor () { }

    init () {
        const db = remoteConfig.database
        this._messagesDB = firebase.database().ref (db.messages);
        this._formsDB = firebase.database().ref (db.forms);

        this._setDataToStore (db.messages, 'setMessages')
        this._setDataToStore (db.forms, 'setForms')
    }

    _setDataToStore (dbName, actionName) {
        const databaseRef = firebase.database().ref();

        databaseRef.child (dbName).on ('value', (snapshots) => {
            let items = [];
            console.log('DB: ', dbName, snapshots.val());
            snapshots.forEach( snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data);
            });
            store.commit (actionName, items);
        });
    }

    async createNewForm (payload, callback) {
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