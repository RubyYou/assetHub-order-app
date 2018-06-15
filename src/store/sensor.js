
import { SensorAPI } from '../apis/index'
import TimeUtils from "../utils/time-utils"

// !IMPORTANT, state has to listed out all details, otherwise, it won't work.
export default {
    state: {
        water: [],
        waterA: [],
        waterB: [],
        rain: [],
        tilt: [],

        gasA: {
            LEL: [],
            CO: [],
            H2S: [],
            O2: []
        },
        gasB: {
            LEL: [],
            CO: [],
            H2S: [],
            O2: []
        },

        gasCurrentDate: TimeUtils.substractDayToDBFormate(0),
        trackers: {}, // get all devices
        locations: {}
    },
    actions: {
        getSensorData({state, commit, rootState}, {type, date, callBack}) {

            let gasType = ['LEL', 'CO', 'H2S', 'O2']
            let sensorInfo = rootState.config.chartInfo[type]
            let params = gasType.indexOf(type) < 0 ? sensorInfo.params : null
            gasType.indexOf(type) >= 0 && commit('setGasDate', { date })
            SensorAPI.getChartData(type, date, params, callBack)
        },
        getLocationData({state, commit}, {date, callBack}) {
            SensorAPI.getLocationData(date, callBack)
        }
    },
    mutations: {
        setSensorData (state, {type, data, callBack}) {

            // sort sensor Data
            if (data.length> 0 && typeof data[0].time === 'string') {
                data.map (item => {
                    let epoch = TimeUtils.formateDateFromString(item.time)
                    item.time = epoch
                })
            }

            const sortable = type.indexOf('water') >= 0 || type.indexOf('tilt') >= 0
            sortable && data.sort ((a, b) => { return a.time - b.time })
            state[type] = data

            let LEL = []
            let CO = []
            let H2S = []
            let O2 = []

            if (type.indexOf ("gas") >= 0) {
                data.map (info => {
                    LEL.push({ value : info.LEL, createTime: parseInt(info.createTime) })
                    H2S.push({ value: info.H2S, createTime: parseInt(info.createTime) })

                    if (parseFloat(info.O2) !== 0) {
                        O2.push ({ value: parseFloat(info.O2), createTime: parseInt(info.createTime) })
                    }
                    if (parseFloat(info.CO) !== 0) {
                        CO.push({ value: parseFloat(info.CO) * 10, createTime: parseInt(info.createTime) })
                    }
                })
                state[type].LEL = LEL
                state[type].CO = CO
                state[type].H2S = H2S
                state[type].O2 = O2
            }
            callBack && callBack()
        },
        setLocationData(state, {data, callBack}) {
            state.locations = data
            callBack && callBack()
        },
        setGasDate(state, {date}) {
            state.gasCurrentDate = date
        }
    }
}