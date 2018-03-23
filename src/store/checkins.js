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
            CheckInAPI.addProfile ()
        },
        createProfileCardMapping () {
            CheckInAPI.addMapping ()
        },
        removeProfile () {
            CheckInAPI.deleteProfile ()
        },
        removeMapping () {
            CheckInAPI.deleteMapping ()
        }
    },
    mutations : {
        // get all profiles from db and store here
        setProfiles (state, {type, info}) {

        },
        // get all card ids and store here
        setCardIDs (state, {type, info}) {

        },
        // get all checkIn history
        getAllCheckInHistory () {

        }
    }
}