
import { SensorAPI } from '../apis/index'

export default {
    state: {
        water: {}, // could have two
        rain: {},
        location: {}
    },
    actions: {},
    mutations : {
        setSensorData (state, {type, data}) {
            state [type] = data
        }
    }
}