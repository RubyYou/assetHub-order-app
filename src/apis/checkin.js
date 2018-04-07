import firebase from 'firebase'
import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import moment from 'moment'
import IndexDB from '../offline/indexDB'

const today = TimeUtils.substractDayToDBFormate(0)
const db = remoteConfig.database

class CheckInAPI {

    constructor() { }

    init () {
        if (Utils.isOnline()) {
            this._setRemoteDB()
        } else {
            this._getContentFromIndexDB()
        }
        this._registerService()
    }

    _getContentFromIndexDB () {

        IndexDB.get('checkin').then (checkin => {
            store.commit ('setAllCheckInInfo', checkin)
        });
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        window.addEventListener('offline', this._offline.bind(this))
    }

    _online () {
        this._setRemoteDB ()

        const sendDBInfo = async (tempDBName, realDB) => {
            const tempDB = await IndexDB.get (tempDBName)
            console.log ('online', tempDB)
            const isTempDBExist = tempDB && tempDB.length > 0
            if (!!isTempDBExist) { return }

            // tempDB.map (item => {
            //     if (item.key) {
            //         const key = form.key
            //         delete form.key
            //         this._formsDB.child(today).child(key).set(form)
            //     } else {
            //         this._formsDB.child(today).push(form)
            //     }
            // })
            // IndexDB.delete (dbName)
        }

        sendDBInfo ('tempProfile', this._profileDB)
        sendDBInfo ('tempMapping', this._todayMappingDB)

        IndexDB.delete ('checkin')
    }

    _offline () {
        // shallow clone

        const allCheckInInfo = JSON.parse (JSON.stringify (store.getters.allCheckInInfo))
        console.log ('offline', allCheckInInfo)
        IndexDB.set ('checkin', allCheckInInfo )
    }

    _setRemoteDB () {
        this._profileDB = firebase.database().ref(db.profile)
        this._cardDB = firebase.database().ref(db.cards)
        this._todayMappingDB = firebase.database().ref(db.cardProfileMapping).child(today)
        this._todayCheckInHistoryDB = firebase.database().ref(db.checkinHistory).child(today)

        this._setDataToStoreByStateName(this._profileDB.child('staff'), 'staff')
        this._setDataToStoreByStateName(this._profileDB.child('vehicle'), 'vehicle')

        this._setCardIDByStateName(this._cardDB.child('staff'), 'staffCardIds')
        this._setCardIDByStateName(this._cardDB.child('vehicle'), 'vehicleCardIds')
        this._setCardIDByStateName(this._cardDB.child('RFID'), 'RFID')

        this._setDataToStoreByStateName(this._todayMappingDB.child('staff'), 'staffCardMapping')
        this._setDataToStoreByStateName(this._todayMappingDB.child('vehicle'), 'vehicleCardMapping')
        this._setTodyCheckInHistory()
    }

    _setDataToStoreByStateName (dbRef, stateName) {
        dbRef.on('value', (snapshots) => {
            let items = [];
            snapshots.forEach(snap => {
                const data = Object.assign({}, snap.val(), { key: snap.key });
                items.push(data)
            });
            //console.log('DB: ', 'setStateInfo', snapshots.val(), items);
            const payload = { name: stateName, data: items }
            store.commit('setStateInfo', payload);
        });
    }

    _setCardIDByStateName (dbRef, stateName) {
        dbRef.once('value', (snapshots) => {
            let items = [];
            snapshots.forEach(snap => {
                items.push(snap.val())
            });
            const payload = {name: stateName, data: items}
            //console.log ('_setCardIDByStateName', items);
            store.commit('setStateInfo', payload);
        });
    }

    _setTodyCheckInHistory () {
        this._todayCheckInHistoryDB.on('value', (snapshots) => {
            let items = [];
            snapshots.forEach(snap => {
                items.push(snap.val())
            })
            console.log('DB: ', items);
            store.dispatch ('createHistoryData', items);
        });
    }

    createProfile (type, payload) {
        payload.createDate = new Date().getTime()
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempProfile', 'create', null, payload)
        } else {
            this._profileDB.child(type).push(payload)
        }
    }

    deleteProfile (type, key) {
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempProfile', 'delete', key, null)
        } else {
            this._profileDB.child (type).child (key).remove ()
        }
    }

    createMapping (type, payload) {
        payload.createDate = new Date().getTime()
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempMapping', 'create', null, payload)
        } else {
            this._todayMappingDB.child(type).push(payload)
        }
    }

    deleteMapping (type, key) {
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempMapping', 'delete', key, null)
        } else {
            this._todayMappingDB.child (type).child (key).remove ()
        }
    }

    async _saveToIndexDB (dbName, action, key, payload) {
        const tempDB= await IndexDB.get (dbName) // array

        let tempDBClone = []
        if (tempDB && tempDB.length > 0) {
            tempDBClone = tempDB.slice(0)
        }

        let repeatedItem = tempDBClone.find (item => {return item.key === key})
        if (repeatedItem) {
            repeatedItem = payload;
        } else {
            tempDBClone.push (payload)
        }

        console.log ('tempDBClone', tempDBClone)
        IndexDB.set(dbName, tempDBClone)
    }
}

export default new CheckInAPI();