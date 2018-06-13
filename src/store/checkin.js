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

            // this is only staff checkin history
            if (items.length > 0 ) {
                items.map (info => {
                    let cardInfo = state.allCards.filter(card => { return card.cardId === info.cardID })
                    let staffInfo = state.staff.filter(staff => { return staff.cardId === info.cardID })

                    let checkinInfo = {
                        name: staffInfo.length > 0 ? staffInfo[0].name : '未配置',
                        cardName: cardInfo.length > 0 ? cardInfo[0].cardName : '未記錄',
                        cardID: (info.cardID).substring(0, 15),
                        createTime: info.createTime,
                        serialNO: info.serialNO
                    }
                    staffHistory.push (checkinInfo)
                })
            }

            commit('setStateInfo', { name: 'staffCheckInHistory', data: staffHistory })
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