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
    "accounts": accountInfo,
    "sensorIP": {
        gas: "",
        water: ""
    },
    "posthref": "/aaa",
    "checkInIP": "",
}

// Firebase, db location remotely
export const remoteConfig = {
    name: "梅花西工地",
    database: {
        accounts: "accounts",
        messages: "messageA",
        forms: "formsA"
    },
    storage: {
        photos: "photoA",
        pdf: "pdfA"
    },
    indexDB: {
        name: "runtime-store",
        tableName: "data"
    },
    api: {
        url: "http://localhost:3000/api/v1",
        socket: "ws://localhost:3001",
        actions: {
            signin: "/signin",
            forms: "/forms"
        }
    }
}