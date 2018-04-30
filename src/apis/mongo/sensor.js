import store from '../../store/index'
import Utils from '../../utils/utils'
import request from 'superagent'
import TimeUtils from '../../utils/time-utils'

const today = TimeUtils.substractDayToDBFormate(0)

class SensorAPI {

    constructor() {
        this._api = {}
        this._database = {}
    }

    init() {
        this._api = store.getters.api
        this._database = store.getters.database
        console.assert(this._api.url && this._api.actions && this._database.sensor)

        const chartInfo = store.getters.chartInfo
        for (let key in chartInfo) {
            if (chartInfo[key].type)
            {
                this._getChartData(chartInfo[key].type, chartInfo[key].params || {})
            }
        }

        this._getTrackerDeviceInfo ()
    }


    _getChartData (type, params) {
        // formate : /sensors/:tableName/:date/:type
        const baseUrl = this._api.url + this._api.actions.sensor + "/" + this._database.sensor + '/' + today + "/"
        const url = baseUrl + type

        console.log (url)

        request.get (url).query (params).end ((err, res) => {
            let results = res.body.results
            if (results) {
                //console.log (type, params, results)
                let payload = {
                    type: type,
                    data: results
                }
                store.commit ('setSensorData', payload)
            } else {
                this.fail ()
            }
        })
    }
    // get all Traker info first before getting all tracker data
    _getTrackerDeviceInfo () { // this will also goes to vehicle mapping stuff
        const type = 'tracker'
        const url = this._api.url + this._api.actions.device + '/' + this._database.deviceMapping + '/' + type
        console.log(url)

        request.get(url).end((err, res) => {
            let results = res.body.results
            if (results) {
                console.log(type, results)
                // two type is different
                let payload = {type: 'trackers', data: results}
                store.commit('setSensorData', payload)
            } else {
                this.fail()
            }
        })
    }

    fail () {
        console.log ('getting data failed')
    }
}
export default new SensorAPI();