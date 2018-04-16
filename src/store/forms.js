import { FormAPI, MessageAPI } from '../apis'
import TimeUtils from '../utils/time-utils'

const defaultSignData = { signA: {}, signB: {}, signC: {} }
const today = TimeUtils.substractDayToDBFormate(0)

export default {
    state: {
        todayForms: {}, // today's form
        selectedForm: {}, // set currentItem
        signData: defaultSignData
    },
    getters : {
        todayForms: state => {
            return state.todayForms
        }
    },
    actions: {
        updateForm ({ state, commit }, { name, data }) {
            console.log(name, data)
            commit('updateSelectedForm', { name, data })
        },
        updateSign ({ state, commit }, { type, data }) {
            console.log(type, data)
            commit('updateSignData', { type, data })
        },
        saveForm ({ state, commit, getters }, f7) {

            // change key to mongodb _id
            const key = state.selectedForm._id

            f7.showPreloader('儲存中');
            const formData = Object.assign({}, state.selectedForm, { signData: state.signData })
            const formInfo = getters.formData[formData.formName]

            console.assert(typeof formInfo === "object")

            const callback = () => {
                f7.hidePreloader()
                console.log('formInfo', formInfo)
                MessageAPI.submit({
                    type: 'form',
                    url: formInfo.url,
                    formName: formInfo.formTitle
                })
            }

            if (key && key.length > 0) {
                console.log('updateForm')
                FormAPI.updateForm(key, formData, callback)
            } else {
                FormAPI.createNewForm(formData, callback)
            }
        }
    },
    mutations: {
        setForms (state, payload) {
            state.todayForms = payload;
        },
        updateSignData (state, { type, data }) {
            state.signData[type] = data;
        },
        updateSelectedForm (state, { name, data }) {
            if (!state.selectedForm[name]) {
                state.selectedForm[name] = ''
            }
            state.selectedForm[name] = data;
        },
        setSelectedForm (state, formName) {
            const selected = state.todayForms.filter(item => {
                return item.formName === formName
            })

            // create new form if not exist
            if (selected.length <= 0) {
                const newForm = { formName: formName }
                state.selectedForm = newForm
                state.signData = defaultSignData
            } else {
                // use old form
                state.selectedForm = selected[0]
                state.signData = selected[0].signData ? selected[0].signData : defaultSignData
            }
        }
    }
}