import { CheckInAPI } from '../apis/index'

export default {
    state: {
        staff: [], // profile data
        //staffCardIds: [], // All cards
        staffCardMapping: [], // current day mapping
        staffCheckInHistory: [], // only today's record

        allCards: [], // All cards
        vehicle: [], // profile data, no empty vehicle cards
        vehicleCheckInHistory: [], // only today's record

        RFID: [], // this include location info and id

        // static data
        types: {
            "RFID": "rfid",
            "STAFF": "staff",
            "VEHICLE": "vehicle"
        },

        selected: {}
    },
    getters : {
        allCheckInInfo: state => {
            return state
        },
        getRFID: state => {
            return state.RFID
        },
        getstaffCardMapping: state => {
            return state.staffCardMapping
        },
        checkinTypes: state => state.types
    },
    actions: {
        // update default staff or vehicle profile
        updateProfile ({state, commit}, {_id, info, type, f7}) {
            CheckInAPI.updateProfile(type, _id, info, f7)
        },
        createProfile ({ state, commit }, { type, info, f7 }) {
            console.assert(type === "staff" || type === "vehicle")
            CheckInAPI.createProfile(type, info, f7)
        },
        deleteProfile ({ state, commit }, { type, _id, f7 }) {
            CheckInAPI.deleteProfile(type, _id, f7)
        },
        createMapping ({ state, commit }, { type, info, f7 }) {
            CheckInAPI.createMapping(type, info, f7)
        },
        deleteMapping ({ state, commit }, { type, _id, f7 }) {
            CheckInAPI.deleteMapping(type, _id, f7)
        },

        // create history data based on RFID and card Mapping information information
        createHistoryData ({ state, commit }, items) {
            let staffHistory = []
            let vehicleHistory = []
            let times = []
            let filteredItem = []
            let oneMin = 1 * 60 * 1000

            // filter out all time
            items.map ((data, index)=> {

                let machineNum = data.serialNO;
                data.serialNO = machineNum.substr (machineNum.length - 5, machineNum.length - 1)
                let isNotValid = true

                if (index > 0) {
                    isNotValid = times.filter(time => Math.abs(time - data.createTime) < oneMin).length > 0
                } else {
                    times.push(data.createTime)
                    filteredItem.push(data)
                }

                if (!isNotValid) {
                    times.push(data.createTime)
                    filteredItem.push (data)
                }
            })

            items.length > 0 && commit('setStateInfo', {
                name: 'staffCheckInHistory',
                data: filteredItem
            })
            // vehicleHistory.length > 0 && commit('setStateInfo', { name: 'vehicleCheckInHistory', data: vehicleHistory })
        }
    },
    mutations : {
        setStateInfo (state, {name, data}) {
            state [name] = data
        },
        setAllCheckInInfo (state, payload) {
            for (let key in payload) {
                state [key] = payload[key]
            }
        },
        setProfileSelected (state, {id, type}) {
            console.assert (type === 'staff' || type === 'vehicle') // see use which data
            const profileType = (type === 'staff') ? 'staff': 'vehicle'
            const selectedData = state[type].find(profile => profile._id == id)
            state.selected = selectedData
        }
    }
}