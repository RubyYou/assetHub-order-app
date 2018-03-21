import firebase from 'firebase'
import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'
import IndexDB from '../offline/indexDB' // change to controller

const today = TimeUtils.substractDayToDBFormate (0)
const db = remoteConfig.database

class FormAPI {

    constructor () { }

    init () {
        // online login
        if (Utils.isOnline()) {
            this._formsDB = firebase.database().ref (db.forms);
            this._setTodayFormDB ()
        } else {
            // offline login, only able to see today's form
            IndexDB.get('forms').then( forms => {
                store.commit ('setForms', forms)
            });
        }
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
        if (!Utils.isOnline()) {
            await this._storeFormToIndexDB (0, payload)
        } else {
            await this._formsDB.child (today).push (payload)
        }
        callback ();
    }

    async updateForm (key, payload, callback) {
        if (!Utils.isOnline()) {
            await this._storeFormToIndexDB (key, payload)
        } else {
            await this._formsDB.child (today).child (key).set (payload)
        }
        callback ();
    }

    async _storeFormToIndexDB (key, payload) {
        // get existing form and store in TempForm
        return await IndexDB.set ('tempForms', { [key]: payload })
    }

    async reconnect () {
        const tempForms = await IndexDB.get ('tempForms')
        const isTempExist = Object.keys (tempForms).length > 0

        if (!isTempExist) { return }

        // tell File API to send
        for (item in tempForms) {
            if (item == 0) {
                await this._formsDB.child (today).push (tempForms[item])
            } else {
                await this._formsDB.child (today).child (item).set (tempForms[item])
            }
        }
        return 'success'
    }
}

export default new FormAPI ();