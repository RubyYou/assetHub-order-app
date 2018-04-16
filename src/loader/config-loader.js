import Utils from '../utils/utils'
import store from '../store/index'

const applicationAreaRef = 'areaB'
const parentFolder = './data'
const maximumLoadingTime = 10000

class ConfigLoader {

    constructor () {
        this._dbConfig = {}
        this.init ()
    }

    init () {
        this._getConfigFolderBaseOnUrl () // this is very important

        // load error check
        setTimeout(()=> {
            this._configLoadingErrorCheck ()
        }, maximumLoadingTime)
    }

    _configLoadingErrorCheck () {
        // error is not working at now
        const isDBSet = store.getters.isSet;
        //isDBSet ? console.log ('db set success') : alert ('not able to load db info')
    }

    _getConfigFolderBaseOnUrl () {
        const test = Utils.getParams ('test') // might be a string
        const isLocalTest = Utils.isLocalTest ()

        // localTest --> use Params to switch db-config, remoteTest, use applicationAreaRef
        const workConfigRef = (test) ? Utils.getParams ('workarea') : applicationAreaRef
        this._getJSON (workConfigRef, 'db-config.json', this._setDBConfig.bind (this), this._setError.bind(this))
        this._getJSON (workConfigRef, 'posts.json', this._setPostData.bind (this), this._setError.bind (this))
        this._getJSON (workConfigRef, 'forms.json', this._setFormData.bind (this), this._setError.bind (this))
        this._getJSON (workConfigRef, 'charts.json', this._setChartData.bind (this), this._setError.bind (this))
    }

    _setDBConfig (data, status, xhr) {

        if (status == 200) {
            this._dbConfig = JSON.parse(data)

            const { name, accounts, api, database, defaultStaff } = this._dbConfig // for all testing data
            console.assert (name && accounts && api && database && defaultStaff)
            store.commit('setDatabaseInfo', { name, accounts, api, database, defaultStaff})
        } else {
            this._setError(status)
        }
    }

    _setPostData (data, status, xhr) {

        if (status == 200) {
            console.assert (data)
            store.commit('setPostData', JSON.parse(data))
        } else {
            this._setError(status)
        }
    }

    _setFormData (data, status, xhr) {

        if (status == 200) {
            console.assert (data)
            store.commit('setFormData', JSON.parse(data))
        } else {
            this._setError(status)
        }
    }

    _setChartData (data, status, xhr) {
        if (status == 200) {
            console.assert (data)
            store.commit('setChartData', JSON.parse(data))
        } else {
            this._setError(status)
        }
    }

    _setError (error) {
        alert ('Loading ERROR', error) // this is a bit weird issue
    }

    _getJSON (areaRef, fileUrl, success, fail) {
        const url = `${parentFolder}/${areaRef}/${fileUrl}`
        //console.log ('getJSON', url)

        window.Dom7.get (url,
            (data, status, xhr) => { success (data, status, xhr)},
            (xhr, status) => { fail (xhr, status)}
        )
    }

}
export default new ConfigLoader()