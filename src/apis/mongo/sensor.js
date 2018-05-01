import store from '../../store/index'
import Utils from '../../utils/utils'
import request from 'superagent'
import TimeUtils from '../../utils/time-utils'

const today = TimeUtils.substractDayToDBFormate(0)

class SensorAPI {

    constructor() {
        this._data = {}
    }

    init() {
        const chartInfo = store.getters.chartInfo

        for (let key in chartInfo) {
            if (chartInfo[key].type)
            {
                this._getChartData (chartInfo[key].type)
            }
        }
    }

    _getChartData (type) {
        const api = store.getters.api
        const database = store.getters.database
        console.assert (api.url && api.actions && database.sensor)

        // formate : /sensors/:tableName/:date/:type
        const baseUrl = api.url + api.actions.sensor + "/" + database.sensor + '/' + today + "/"
        const url = baseUrl + type

        console.log (url)

        request.get (url).end ((err, res) => {
            let results = res.body.results
            if (results) {
                console.log ('results', results)
                let payload = {
                    type: type,
                    data: results
                }
                //this._data[type] = results
                store.commit ('setSensorData', payload)
            } else {
                this.fail ()
            }
        })
    }

    getSensor (type) {
        return this._data[type] ? this._data[type] : []
    }

    fail () {
        console.log ('getting data failed')
    }
}
export default new SensorAPI();