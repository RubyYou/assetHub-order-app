
import { SensorAPI } from '../apis/index'

// !IMPORTANT, state has to listed out all details, otherwise, it won't work.
export default {
    state: {
        water: [],
        waterA: [],
        waterB: [],
        rain: [],

        trackers: {}, // get all devices
        locations: {}
    },
    actions: {
        getSensorData({state, commit, rootState}, {type, date, callBack}) {
            const params = rootState.config.chartInfo[type].params
            SensorAPI.getChartData(type, date, params, callBack)
        },
        getLocationData({state, commit}, {date, callBack}) {
            SensorAPI.getLocationData(date, callBack)
        },
    },
    mutations: {
        setSensorData(state, {type, data, callBack}) {
            state[type] = data
            callBack && callBack()
        },
        setLocationData(state, {data, callBack}) {
            state.locations = data
            callBack && callBack()
        }
    }
}