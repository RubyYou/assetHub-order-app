import firebase from 'firebase'
import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'

const today = moment().format('l').split("/").join("-").toString()
const db = remoteConfig.database

class FormAPI {

    constructor () { }

    init () {
        this._formsDB = firebase.database().ref (db.forms);
        this._setTodayFormDB ()
    }

    _setTodayFormDB () {
        const todayForm = this._formsDB.child (today)
        todayForm.once ('value', (snapshot) => {
            if (!snapshot.exists ()) {
                const firstNode = {"created": new Date().getTime ()}
                todayForm.set(firstNode)
            }
            this._setDataToStore (todayForm, 'setForms')
        })
    }

    _setDataToStore (dbRef, actionName) {
        dbRef.on ('value', (snapshots) => {
            let items = [];
            snapshots.forEach( snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                if (data.key !== "created") {
                    items.push (data);
                }
            });
            console.log('DB: ', actionName, snapshots.val());
            store.commit (actionName, items);
        });
    }

    async createNewForm (payload, callback) {
        payload.createDate = new Date ().getTime ()
        await this._formsDB.child (today).push (payload)
        console.log ('createNewForm, finished');
        callback ();
    }

    async updateForm (key, payload, callback) {
        await this._formsDB.child (today).child (key).set (payload)
        console.log ('updateForm, finished');
        callback ();
    }

    getDownloadLink (imageUrl) {

    }
}

export default new FormAPI ();