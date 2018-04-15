// this is for static data

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
        formList: null
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
            state.api = api
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
        }
    }
}