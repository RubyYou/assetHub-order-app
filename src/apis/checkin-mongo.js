import store from '../store/index'
import { remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import TimeUtils from '../utils/time-utils'
import IndexDB from '../offline/indexDB'
import SocketAPI from './socket'

const today = TimeUtils.substractDayToDBFormate(0)
const db = remoteConfig.database
const STAFF = 'staff'
const VEHICLE = 'vehicle'

class CheckInAPI {

    constructor() { }

    init () {
        Utils.isOnline() ? this._setRemoteDB() : this._getContentFromIndexDB()
        this._registerService()
    }

    _getContentFromIndexDB () {
        IndexDB.get('checkin').then(checkin => {
            store.commit('setAllCheckInInfo', checkin)
        });
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        window.addEventListener('offline', this._offline.bind(this))
    }

    async _online () {
        this._setRemoteDB()

        const sendDBInfo = async (tempDBName, realDB) => {
            const tempDB = await IndexDB.get (tempDBName)
            console.log ('online', tempDB)
            const isTempDBExist = tempDB && tempDB.length > 0
            if (!isTempDBExist) { return }

            // it is belong to profile or mapping
            const isProfile = tempDBName.toLowerCase().indexOf('profile') > 0;
            const createFunc = isProfile ? 'createProfile' : 'createMapping'
            const deleteFunc = isProfile ? 'deleteProfile' : 'deleteMapping'

            tempDB.map (item => {
                if (item._id) {
                    SocketAPI[deleteFunc] (item)
                } else {
                    SocketAPI[createFunc] (item)
                }
            })
            IndexDB.delete (tempDBName)
        }

        sendDBInfo ('tempProfile', this._profileDB)
        sendDBInfo ('tempMapping', this._todayMappingDB)

        IndexDB.delete ('checkin')
    }

    _offline () {
        // shallow clone
        const allCheckInInfo = JSON.parse (JSON.stringify (store.getters.allCheckInInfo))
        console.log ('offline', allCheckInInfo)
        IndexDB.set ('checkin', allCheckInInfo)
    }

    _setRemoteDB () {
        SocketAPI.getRFIDCard()
        SocketAPI.getStaffCard()
        SocketAPI.getVehicleCard()
        SocketAPI.getStaffProfile()
        SocketAPI.getVehicleProfile()
        SocketAPI.getTodayStaffCardMapping(today)
        SocketAPI.getTodayVehicleCardMapping(today)
        SocketAPI.getTodyCheckInHistory(today)
    }

    createProfile (type, payload) {
        payload.type = type
        payload.createDate = today

        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempProfile', 'create', null, payload)
        } else {
            SocketAPI.createProfile(payload)
        }
    }

    deleteProfile (type, _id) {
        let payload = {
            _id: _id,
            today: today,
            type: type
        }

        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempProfile', 'delete', _id, payload)
        } else {
            SocketAPI.deleteProfile(payload)
        }
    }

    createMapping (type, payload) {
        console.log(type, payload)
        payload.createDate = today
        payload.type = type
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempMapping', 'create', null, payload)
        } else {
            SocketAPI.createMapping(payload)
        }
    }

    deleteMapping (type, _id) {
        let payload = {
            _id: _id,
            today: today,
            type: type
        }
        if (!Utils.isOnline()) {
            this._saveToIndexDB ('tempMapping', 'delete', _id, payload)
        } else {
            console.log('deleteMapping', _id)
            SocketAPI.deleteMapping(payload)
        }
    }

    async _saveToIndexDB (dbName, action, _id, payload) {
        const tempDB= await IndexDB.get (dbName) // array

        console.log (dbName, action, _id, payload)

        let tempDBClone = []
        if (tempDB && tempDB.length > 0) {
            tempDBClone = tempDB.slice(0)
        }

        let repeatedItem = tempDBClone.find (item => {return item._id === _id})
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