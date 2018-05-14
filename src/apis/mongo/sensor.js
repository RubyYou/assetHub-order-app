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
                this.getChartData(chartInfo[key].type, today, chartInfo[key].params || {})
            }
        }

        this._getTrackerDeviceInfo ()
    }

    getChartData (type, date, params, callBack) {
        // formate : /sensors/:tableName/:date/:type
        const baseUrl = this._api.url + this._api.actions.sensor + '/' + this._database.sensor + '/' + date + '/'
        const url = baseUrl + type

        request.get (url).query (params).end ((err, res) => {
            let results = res.body.results
            if (results) {
                let payload = {
                    type: type,
                    data: results,
                    callBack : callBack
                }
                store.commit ('setSensorData', payload)

            } else {
                this.fail ()
            }
        })
    }

    _getTrackerDeviceInfo () {
        const type = 'tracker'
        const url = this._api.url + this._api.actions.device + '/' + this._database.deviceMapping + '/' + type

        request.get(url).end((err, res) => {
            let results = res.body.results
            if (results) {
                //console.log(type, results)
                // two type is different
                let payload = { type: 'trackers', data: results}
                this.getLocationData (today)
                store.commit('setSensorData', payload)
            } else {
                this.fail()
            }
        })
    }

    getLocationData (date, callBack) {
        const type = 'tracker'
        // formate : /sensors/:tableName/:date/:type
        const url = this._api.url + this._api.actions.sensor + '/' + this._database.sensor + '/' + date + '/' + type

        request
            .get(url)
            .end((err, res) => {
                let results = res.body.results
                if (results) {
                    let payload = {
                        data: results,
                        callBack: callBack
                    }
                    store.commit('setLocationData', payload)
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