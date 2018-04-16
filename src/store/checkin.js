/* // no card and no mapping for the cardsA
    cardsA :[
        {
            // RFID
            "_id" : ObjectId("5ac253550c81af5499d25a84"),
            "serialNO" : "y8327ryufewfkew", // machie number 0000000012345660
            "machineName" : "machine 1",
            "type":"RFID"
        },
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            "cardID" : "y8327ryufewfkew1", cardSerialNo: 50313a313331343033383132383130323033303738323535323535
            "cardName" : "card1",
            "type":"STAFF"
        }
    ]

    profileA :[
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            name: "",
            companyName: "aaaa",
            workType: "", // 水泥工 、模板工、打石工 (select)
            bloodType: "" ,// Ｏ Ａ B AB (select)
            "type":"STAFF"
        },
        {
            // vehicle
            "_id" : ObjectId("5ac253550c81af5499d25a86"),
            number: "aaaa",
            companyName: "aaaa",
            vehicleType: "", // 起重機  挖土機 吊機 (select)
            "type":"VEHICLE"
        }
    ]

    cardProfileMappingA:[
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            cardID: "y8327ryufewfkew1",
            profileName: "aaaa",
            createDate: "" ,
            "type":"STAFF"
        }
    ]

    checkinHistoryA:[
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            cardID: "y8327ryufewfkew1",
            serialNO: "y8327ryufewfkew",
            createDate: "" ,
            createTime:""
        },
    ]
*/

import { CheckInAPI } from '../apis/index'

export default {
    state: {
        staff: [], // profile data
        staffCardIds: [], // not signed card Id
        staffCardMapping: [], // current day mapping
        staffCheckInHistory: [], // only today's record

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

            items.map(item => {
                const staffCard = state.staffCardMapping.find(card => parseInt(card.cardID) == parseInt(item.cardID))
                const vehicleCard = state.vehicleCardMapping.find(card => parseInt(card.cardID) == parseInt(item.cardID))
                let locationInfo = null
                let cardInfo = null

                if (staffCard) {
                    locationInfo = state.RFID.find(location => location.serialNO === item.serialNO)
                    cardInfo = Object.assign({}, staffCard, { location: locationInfo.machineName }, { time: item.createTime })
                    delete cardInfo.createDate
                    staffHistory.push(cardInfo)

                } else if (vehicleCard) {
                    locationInfo = state.RFID.find(location => location.serialNO === item.serialNO)
                    cardInfo = Object.assign({}, vehicleCard, { location: locationInfo.machineName }, { time: item.createTime })
                    delete cardInfo.createDate
                    vehicleHistory.push(cardInfo)
                }
            })

            staffHistory.length > 0 && commit('setStateInfo', { name: 'staffCheckInHistory', data: staffHistory })
            vehicleHistory.length > 0 && commit('setStateInfo', { name: 'vehicleCheckInHistory', data: vehicleHistory })
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