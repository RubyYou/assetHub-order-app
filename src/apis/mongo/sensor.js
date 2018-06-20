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

        this._getDeviceInfo ('tracker')
        //this._getDeviceInfo ('helmet') // not load (temp)
    }

    getChartData (type, date, params, callBack) {
        // formate : /sensors/:tableName/:date/:type
        const baseUrl = this._api.url + this._api.actions.sensor + '/' + this._database.sensor + '/' + date + '/'
        const url = baseUrl + type

        // apply special rule if has one
        let rulesInfo = store.getters.chartInfo[type].rules || null

        if (rulesInfo) {
            let rules = rulesInfo && rulesInfo.filter((rule) => {
                return new Date(date).getTime() >= new Date(rule.time).getTime()
            })
            rules.length > 0 && (params = rules[0].params)
        }

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

    _getDeviceInfo (type) {
        const url = this._api.url + this._api.actions.device + '/' + this._database.deviceMapping + '/' + type
        let payload = {}

        request.get(url).end((err, res) => {
            let results = res.body.results
            if (results) {
                if (type === 'tracker' || type === 'helmet') {
                    type === 'tracker' && (payload = { type: 'trackers', data: results })
                    type === 'helmet' && (payload = { type: 'helmets', data: results })
                    this.getTrackingData(today, type)
                } else {
                    payload = { type: type, data: results }
                }

                store.commit('setSensorData', payload)
            } else {
                this.fail()
            }
        })
    }

    // two type of tracking, vehicle tracking and helmet tracking
    getTrackingData (date, type, callBack) {
        // this is testing only
        const sensorDB = type == 'helmet' ? 'sensorD' : this._database.sensor
        // formate : /sensors/:tableName/:date/:type
        const url = this._api.url + this._api.actions.sensor + '/' + sensorDB + '/' + date + '/' + type

        request
            .get(url)
            .end((err, res) => {
                let results = res.body.results
                if (results) {
                    let payload = {
                        data: results,
                        type: type,
                        callBack: callBack
                    }
                    store.commit('setTrackingData', payload)
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