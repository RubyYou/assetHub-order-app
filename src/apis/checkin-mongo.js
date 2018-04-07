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
        // online login
        if (Utils.isOnline()) {
            this._setRemoteDB()
        } else {
            this._getContentFromIndexDB()
        }
        this._registerService()
    }

    _getContentFromIndexDB () {
        // IndexDB.get('profiles').then(profiles => {
        //     store.commit ('setProfiles', profiles)
        // });
    }

    _registerService () {
        window.addEventListener('online', this._online.bind(this))
        window.addEventListener('offline', this._offline.bind(this))
    }

    async _online () {
        this._setRemoteDB()
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
        SocketAPI.createProfile(payload)

        // if (!Utils.isOnline()) {
        //     // await this._saveToIndexDB (null, payload)
        // } else {
        // }
    }

    deleteProfile (type, key) {
        // this._profileDB.child(type).child(key).remove()
        let payload = {
            key: key,
            today: today,
            type: type
        }
        SocketAPI.deleteProfile(payload)
    }

    createMapping (type, payload) {
        console.log(type, payload)
        payload.createDate = today
        payload.type = type
        SocketAPI.createMapping(payload)

        // if (!Utils.isOnline()) {
        //     // await this._saveToIndexDB (null, payload)
        // } else {
        //     this._todayMappingDB.child(type).push(payload)
        // }
    }

    deleteMapping (type, key) {
        let payload = {
            key: key,
            today: today,
            type: type
        }
        console.log('deleteMapping', key)
        SocketAPI.deleteMapping(payload)

        // this._todayMappingDB.child(type).child(key).remove()
    }

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

export default new CheckInAPI();