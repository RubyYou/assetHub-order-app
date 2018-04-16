// this is for static data
const testApi = {
    url: "http://localhost:3000/api/v1",
    socket: "ws://localhost:3001",
    actions: {
        signin: "/signin",
        forms: "/forms"
    }
}

export default {
    state: {
        name: '',
        defaultStaff: [],
        isSet : false,
        api: {},
        database: {},
        accounts: [],
        postData: null,
        formData: null,
        formList: null,
        chartList: null,
        chartInfo: null // not implement yet
    },
    getters: {
        isSet : state => state.isSet,
        accounts: state => state.accounts,
        database: state => state.database,
        api: state => state.api,
        postData: state => state.postData,
        formData: state => state.formData
    },
    actions: {},
    mutations : {
        setDatabaseInfo (state, { name, accounts, api, database, defaultStaff }) {
            console.log('setDBInfo', { name, accounts, api, database, defaultStaff })

            state.name = name
            state.accounts = accounts
            // state.api = api
            state.api = testApi
            state.database = database
            state.defaultStaff = [''].concat (defaultStaff) // should add an empty value for not select
            state.isSet = true
        },
        setPostData (state, payload) {
            console.assert (payload.posts)
            state.postData = payload.posts
        },
        setFormData (state, payload) {
            console.assert (payload.formList && payload.formData)
            state.formData = payload.formData
            state.formList = payload.formList
        },
        setChartData (state, payload) {
            console.assert (payload.chartList)
            state.chartList = payload.chartList

            if (payload.chartFormData) {
                state.formData = { ...state.formData, ...payload.chartFormData}
            }
        }
    }
}