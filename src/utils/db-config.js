// common, locally and remotely
// if wanna update it has to be remotely
export const accountInfo = [
    {
        account: '總指揮',
        password: 0,
        accountType: 'ADMIN'
    }, {
        account: '副總指揮',
        password: 0,
        accountType: 'WRITE'
    }, {
        account: '一般人員',
        password: 0,
        accountType: 'NORMAL'
    }
]

// locally should have info in sellphone
export const localConfig = {
    accounts: accountInfo,
    sensorIP: {
        gas: "",
        water: ""
    },
    posthref: "/aaa",
    checkInIP: "",
    indexDB: {
        name: "runtime-store",
        tableName: "offlineData"
    }
}

// Firebase, db location remotely
export const remoteConfig = {
    name: "梅花西工地",
    database: {
        accounts: "accounts",
        messages: "messageA",
        forms: "formsA",
        profile: "profileA", // this include car profile and staff profile
        cards: "cardsA",
        cardProfileMapping: "cardProfileMappingA", // this include card+staff and card+car mapping
        checkinHistory: "checkinHistoryA",
    },
    storage: {
        photos: "photoA",
        pdf: "pdfA"
    }
}