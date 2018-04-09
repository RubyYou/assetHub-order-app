/*
    template for result
    staff: {
        name: "",
        companyName: "aaaa",
        workType: "", // 水泥工 、模板工、打石工 (select)
        bloodType: "" // Ｏ Ａ B AB (select)
    }

    vehicle: {
        number: "aaaa",
        companyName: "aaaa",
        vehicleType: "", // 起重機  挖土機 吊機 (select)
    }

    mongodb model schema
    cardsA :[
        {
            // RFID
            "_id" : ObjectId("5ac253550c81af5499d25a84"),
            "serialNO" : "y8327ryufewfkew",
            "machineName" : "card1",
            "location" : {
                "longitude" : 0.0001,
                "latitude" : 11.0001
            },
            "type":"RFID"
        },
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            "cardID" : "y8327ryufewfkew1",
            "cardName" : "card1",
            "type":"STAFF"
        },
        {
            // vehicle
            "_id" : ObjectId("5ac253550c81af5499d25a86"),
            "cardID" : "y8327ryufewfkew2",
            "cardName" : "card1",
            "type":"VEHICLE"
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
        },
        {
            // vehicle
            "_id" : ObjectId("5ac253550c81af5499d25a86"),
            cardID: "y8327ryufewfkew1",
            profileName: "aaaa",
            createDate: "" ,
            "type":"VEHICLE"
        }
    ]

    checkinHistoryA:[
        {
            // staff
            "_id" : ObjectId("5ac253550c81af5499d25a85"),
            cardID: "y8327ryufewfkew1",
            serialNO: "y8327ryufewfkew",
            createDate: "" ,
            checkinTime:""
        },
    ]

*/
import { CheckInAPI } from '../apis/index'

export default {
    state: {
        staff: [], // profile data
        staffCardIds: [], // ID data
        staffCardMapping: [], // only today's record
        staffCheckInHistory: [], // only today's record

        vehicle: [], // profile data,
        vehicleCardIds: [], // ID data,
        vehicleCardMapping: [], // only today's record
        vehicleCheckInHistory: [], // only today's record

        RFID: [] // this include location info and id
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
        getvehicleCardMapping: state => {
            return state.vehicleCardMapping
        }
    },
    actions: {
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
                    cardInfo = Object.assign({}, staffCard, { location: locationInfo.machineName }, { time: item.checkinTime })
                    delete cardInfo.createDate
                    staffHistory.push(cardInfo)

                } else if (vehicleCard) {
                    locationInfo = state.RFID.find(location => location.serialNO === item.serialNO)
                    cardInfo = Object.assign({}, vehicleCard, { location: locationInfo.machineName }, { time: item.checkinTime })
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
                //console.log ('setAllCheckInInfo', key, state[key])
            }
        }
    }
}