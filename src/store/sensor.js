
import { SensorAPI } from '../apis/index'

export default {
    state: {

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