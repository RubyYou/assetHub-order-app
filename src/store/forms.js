import Loader from '../loader/loader'
const defaultSignData =  { signA: {}, signB: {}, signC: {} }

export default {
    state : {
        todayForms: {}, // today's form
        selectedForm: {}, // set currentItem
        signData: defaultSignData
    },
    getters : {
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
            const formData = Object.assign ({}, state.selectedForm, { signData: state.signData})
            // console.log (JSON.parse(JSON.stringify(formData)))
            if (key && key.length > 0) {
                Loader.updateForm (key, formData, f7.hidePreloader)
            } else {
                Loader.createNewForm (formData, f7.hidePreloader)
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
        setSelectedForm (state, {formName, formType}) {
            const selected = state.todayForms.filter (item => {
                return item.formName === formName && item.formType === formType
            })

            // create new form if not exist
            if (selected.length <= 0) {
                const newForm = {
                    formName: formName,
                    formType: formType
                }
                state.selectedForm = newForm
                state.signData = defaultSignData
            } else {
                // use old form
                state.selectedForm = selected [0]
                selected [0].signData ? selected [0].signData : defaultSignData
            }
        }
    }
}