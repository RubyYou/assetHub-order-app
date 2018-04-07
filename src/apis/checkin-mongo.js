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
            const isTempDBExist = tempDB && tempDB.length > 0
            if (!isTempDBExist) { return }

            tempDB.map (item => {
                if (item._id) {
                    SocketAPI.createProfile (item)
                } else {
                    SocketAPI.deleteProfile (item)
                }
            })
            IndexDB.delete (tempDBName)
        }

        // ONLY Profile can use offline
        sendDBInfo ('tempProfile', this._profileDB)
        IndexDB.delete ('checkin')
    }

    _offline () {
        // shallow clone
        const allCheckInInfo = JSON.parse (JSON.stringify (store.getters.allCheckInInfo))
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
            this._showHidePreloader (f7, '本記錄暫存中, 連線後會再寄出本紀錄')
        } else {
            SocketAPI.createProfile(payload)
            this._showHidePreloader (f7, '儲存中')
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
            this._showHidePreloader (f7, '本記錄暫存中, 連線後會再寄出本紀錄')
        } else {
            SocketAPI.deleteProfile(payload)
            this._showHidePreloader (f7, '刪除中')
        }
    }

    createMapping (type, payload, f7) {
        console.log(type, payload)
        payload.createDate = today
        payload.type = type
        if (!Utils.isOnline()) {
            this._showHidePreloader(f7, '此功能無法線下使用')
        } else {
            SocketAPI.createMapping(payload)
            this._showHidePreloader(f7, '儲存中')
        }
    }

    deleteMapping (type, _id, f7) {
        let payload = {
            _id: _id,
            today: today,
            type: type
        }
        if (!Utils.isOnline()) {
            this._showHidePreloader(f7, '此功能無法線下使用')
        } else {
            SocketAPI.deleteMapping(payload)
            this._showHidePreloader(f7, '刪除中')
        }
    }

    async _saveToIndexDB (dbName, action, _id, payload) {
        const tempDB= await IndexDB.get (dbName) // array
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

    _showHidePreloader (f7, message) {
        console.assert (typeof message === 'string')
        f7.showPreloader(message)
        setTimeout(() => {
            f7.hidePreloader()
        }, 500);
    }
}

export default new CheckInAPI();