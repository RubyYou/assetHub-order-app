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
*/
import CheckInAPI from '../apis/checkin' // --> there are some weird error, can not use index

export default {
    state : {
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
    },
    actions : {
        createProfile ({state, commit}, {type, info}) {
            console.assert (type === "staff" || type === "vehicle")
            CheckInAPI.createProfile (type, info)
        },
        deleteProfile ({state, commit}, {type, key}) {
            CheckInAPI.deleteProfile (type, key)
        },
        createMapping ({state, commit}, {type, info}) {
            CheckInAPI.createMapping (type, info)
        },
        deleteMapping ({state, commit}, {type, key}) {
            CheckInAPI.deleteMapping (type, key)
        },

        // create history data based on RFID and card Mapping information information
        createHistoryData ({state, commit}, items) {
            let staffHistory = []
            let vehicleHistory = []

            items.map (item => {
                const staffCard = state.staffCardMapping.find (card => card.cardID === item.cardID)
                const vehicleCard = state.vehicleCardMapping.find (card => card.cardID === item.cardID)
                let locationInfo  = null
                let cardInfo = null

                if (staffCard) {
                    locationInfo = state.RFID.find (card => card.cardID === staffCard.cardID)
                    cardInfo = Object.assign({}, staffCard, {location: locationInfo.location}, {time: item.time})
                    delete cardInfo.createDate
                    //console.log ('staffCard', cardInfo)

                    staffHistory.push (cardInfo)

                } else if (vehicleCard) {
                    locationInfo = state.RFID.find (card => card.cardID === vehicleCard.cardID)
                    cardInfo = Object.assign({}, vehicleCard, {location: locationInfo.location},  {time: item.time})
                    delete cardInfo.createDate
                    //console.log ('vehicleCard', cardInfo)
                    vehicleHistory.push (cardInfo)
                }
            })

            staffHistory.length > 0 && commit ('setStateInfo', {name: 'staffCheckInHistory', data: staffHistory})
            vehicleHistory.length > 0 && commit ('setStateInfo', {name: 'vehicleCheckInHistory', data: vehicleHistory})
        }
    },
    mutations : {
        // get all profiles from db and store here
        setStateInfo (state, {name, data}) {
            state[name] = data
        }
    }
}