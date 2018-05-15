
import { SensorAPI } from '../apis/index'

// !IMPORTANT, state has to listed out all details, otherwise, it won't work.
export default {
    state: {
        water: [],
        waterA: [],
        waterB: [],
        rain: [],

        gas: [],
        LEL: [],
        CO: [],
        H2S: [],
        O2: [],

        trackers: {}, // get all devices
        locations: {}
    },
    actions: {
        getSensorData({state, commit, rootState}, {type, date, callBack}) {
            let sensorInfo = rootState.config.chartInfo[type]
            const params = (sensorInfo.params) ? sensorInfo.params : null
            SensorAPI.getChartData(type, date, params, callBack)
        },
        getLocationData({state, commit}, {date, callBack}) {
            SensorAPI.getLocationData(date, callBack)
        },
    },
    mutations: {
        setSensorData (state, {type, data, callBack}) {
            state[type] = data

            let LEL = []
            let CO = []
            let H2S = []
            let O2 = []

            if (type.indexOf ("gas") >= 0) {
                data.map (info => {
                    LEL.push ({ value : info.LEL, createTime: parseInt(info.createTime) })
                    O2.push ({ value: info.O2, createTime: parseInt(info.createTime) })
                    CO.push ({ value: info.CO, createTime: parseInt(info.createTime) })
                    H2S.push ({ value: info.H2S, createTime: parseInt(info.createTime) })
                })
                state.LEL = LEL
                state.CO = CO
                state.H2S = H2S
                state.O2 = O2
            }

            callBack && callBack()
        },
        setLocationData(state, {data, callBack}) {
            state.locations = data
            callBack && callBack()
        }
    }
}