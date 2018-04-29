
import { SensorAPI } from '../apis/index'

export default {
    state: {
        water: {}, // could have two
        rain: {},

        trackers: {}, // get all devices
        locations: {},
    },
    actions: {},
    mutations: {
        setSensorData(state, {type, data}) {
            state[type] = data
        },
        setLocationData(state, data) {
            state.locations = data
        }
    },
}