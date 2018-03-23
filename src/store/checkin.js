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
        vehicleCheckInHistory: [] // only today's record
    },
    getters : {
    },
    actions : {
        createProfile ({state, commit}, {type, info}) {
            console.assert (type === "staff" || type === "vehicle")
            CheckInAPI.createProfile (type, info)
        },
        // createProfileCardMapping () {
        //     //CheckInAPI.createMapping (type, info)
        // },
        deleteProfile ({state, commit}, {type, key}) {
            CheckInAPI.deleteProfile (type, key)
        }
        // removeMapping () {
        //     //CheckInAPI.deleteMapping ()
        // }
    },
    mutations : {
        // // get all profiles from db and store here
        setStaffProfile (state, payload) {
            state.staff = payload
        },
        setVehicleProfile (state, payload) {
            state.vehicle = payload
        }
        // // get all card ids and store here
        // setCardIDs (state, {type, info}) {

        // },
        // //get all card Mapping for today
        // setTodayMappingHistory (state, {type, info}) {

        // },
        // // get all checkIn history
        // setTodayCheckInHistory () {

        // }
    }
}