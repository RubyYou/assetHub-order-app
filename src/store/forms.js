import FormAPI from '../apis/form'
import MessageAPI from '../apis/message'
import * as Forms from '../pages/forms/form-data'
const defaultSignData =  { signA: {}, signB: {}, signC: {} }

export default {
    state : {
        todayForms: {}, // today's form
        selectedForm: {}, // set currentItem
        signData: defaultSignData
    },
    getters : {
        todayForms: state => {
            return state.todayForms
        }
    },
    actions : {
        updateForm ({state, commit}, {name, data}) {
            console.log (name, data)
            commit ('updateSelectedForm', {name, data})
        },
        updateSign ({state, commit}, {type, data}) {
            console.log (type, data)
            commit ('updateSignData', {type, data})
        },
        saveForm ({state, commit}, f7) {
            const key = state.selectedForm.key

            f7.showPreloader('儲存中');
            const formData = Object.assign ({}, state.selectedForm, {signData: state.signData})
            const formInfo = Forms [formData.formName]

            console.assert (typeof formInfo === "object")

            const callback = () => {
                f7.hidePreloader ()
                console.log (formInfo)
                MessageAPI.submit ({
                    type: 'form',
                    url: formInfo.url,
                    formName: formInfo.formTitle
                })
                // TODO: Fetch form from other days and
                // if the form is in different date, should be read only
            }

            if (key && key.length > 0) {
                FormAPI.updateForm (key, formData, callback)
            } else {
                FormAPI.createNewForm (formData, callback)
            }
        }
    },
    mutations : {
        setForms (state, payload) {
            state.todayForms = payload;
        },
        updateSignData (state, {type, data}) {
            state.signData [type] = data;
        },
        updateSelectedForm (state, {name, data}) {
            if (!state.selectedForm [name]) {
                state.selectedForm [name] = ''
            }
            state.selectedForm [name] = data;
        },
        setSelectedForm (state, formName) {
            const selected = state.todayForms.filter (item => {
                return item.formName === formName
            })

            // create new form if not exist
            if (selected.length <= 0) {
                const newForm = { formName: formName }
                state.selectedForm = newForm
                state.signData = defaultSignData
            } else {
                // use old form
                state.selectedForm = selected [0]
                state.signData = selected [0].signData ? selected [0].signData : defaultSignData
            }
        }
    }
}