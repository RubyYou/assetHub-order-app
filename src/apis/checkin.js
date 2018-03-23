import firebase from 'firebase'
import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'
import IndexDB from '../offline/indexDB'

const today = TimeUtils.substractDayToDBFormate (0)
const db = remoteConfig.database

class CheckInAPI {

    constructor () {}

    init () {
        // online login
        if (Utils.isOnline()) {
            this._setRemoteDB ()
        } else {
            this._getContentFromIndexDB ()
        }
        this._registerService ()
    }

    _getContentFromIndexDB () {
        // IndexDB.get('profiles').then(profiles => {
        //     store.commit ('setProfiles', profiles)
        // });
    }

    _registerService () {
        window.addEventListener ('online', this._online.bind (this))
        window.addEventListener ('offline', this._offline.bind (this))
    }

    async _online () {
        this._setRemoteDB ()
        // const tempForms = await IndexDB.get ('tempForms')
        // const isTempExist = tempForms && tempForms.length > 0

        // if (!isTempExist) { return }

        // tempForms.map (form => {
        //     if (form.key) {
        //         const key = form.key
        //         delete form.key
        //         this._formsDB.child(today).child(key).set(form)
        //     } else {
        //         this._formsDB.child(today).push(form)
        //     }
        // })

        // IndexDB.delete ('tempForms')
        // IndexDB.delete ('forms')
    }

    _offline () {
        // shallow clone
        // const forms = JSON.parse (JSON.stringify (store.getters.todayForms))
        // IndexDB.set ('forms', forms )
    }

    _setRemoteDB () {
        this._profileDB = firebase.database().ref (db.profile)
        this._cardDB = firebase.database().ref (db.cards)
        this._todayMappingDB = firebase.database().ref (db.cardProfileMapping).child (today)
        // this._todayCheckInHistoryDB = firebase.database().ref (db.checkinHistory).child (today)

        this._setDataToStoreByStateName (this._profileDB.child ('staff'), 'staff')
        this._setDataToStoreByStateName (this._profileDB.child ('vehicle'), 'vehicle')
        this._setCardIDByStateName (this._cardDB.child ('staff'), 'staffCardIds')
        this._setCardIDByStateName (this._cardDB.child ('vehicle'), 'vehicleCardIds')
        this._setDataToStoreByStateName (this._todayMappingDB.child('staff'), 'staffCardMapping')
        this._setDataToStoreByStateName (this._todayMappingDB.child('vehicle'), 'vehicleCardMapping')

        // this._setDataToStore (this._todayCheckInHistoryDB, 'setTodayCheckInHistory')
    }

    _setDataToStoreByStateName (dbRef, stateName) {
        dbRef.on ('value', (snapshots) => {
            let items = [];
            snapshots.forEach (snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data)
            });
            console.log('DB: ', 'setStateInfo', snapshots.val(), items);
            const payload = { name: stateName, data: items}
            store.commit ('setStateInfo', payload);
        });
    }

    _setCardIDByStateName (dbRef, stateName) {
        dbRef.once ('value', (snapshots) => {
            let items = [];
            snapshots.forEach (snap => {
                items.push (snap.val())
            });
            const payload = {name : stateName, data: items}
            store.commit ('setStateInfo', payload);
        });
    }

    createProfile (type, payload) {
        payload.createDate = new Date ().getTime ()
        if (!Utils.isOnline()) {
            // await this._saveToIndexDB (null, payload)
        } else {
            this._profileDB.child (type).push (payload)
        }
    }

    deleteProfile (type, key) {
        this._profileDB.child (type).child (key).remove ()
    }

    createMapping (type, payload) {
        payload.createDate = new Date ().getTime ()
        if (!Utils.isOnline()) {
            // await this._saveToIndexDB (null, payload)
        } else {
            this._todayMappingDB.child (type).push (payload)
        }
    }

    deleteMapping (type, key) {
        this._todayMappingDB.child (type).child (key).remove ()
    }

    // async updateForm (key, payload, callback) {
    //     if (!Utils.isOnline()) {
    //         this._saveToIndexDB (key, payload)
    //     } else {
    //         await this._formsDB.child (today).child (key).set (payload)
    //     }
    //     callback ();
    // }

    // async _saveToIndexDB (key, payload) {
    //     const tempForms = await IndexDB.get ('tempForms') // array
    //     let tempFormClone = []
    //     if (tempForms && tempForms.length > 0) {
    //         tempFormClone = tempForms.slice(0)
    //     }

    //     let repeatedItem = tempFormClone.find (item => {return item.key === key})
    //     if (repeatedItem) {
    //         repeatedItem = payload;
    //     } else {
    //         tempFormClone.push (payload)
    //     }

    //     //console.log ('tempFormClone', tempFormClone)
    //     IndexDB.set('tempForms', tempFormClone)
    // }
}

export default new CheckInAPI ();