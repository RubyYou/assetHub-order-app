export default {
    state : {
        todayForms: {}, // today's form
        selectedForm: {} // set currentItem
    },
    getters : {
        signData: state => {
            console.log ( state.selectedForm)
            return state.selectedForm.signData
        }
    },
    actions : {
        updateForm ({state, commit}, {name, data}) {
            console.log (name, data)
            commit ('updateSelectedForm', {name, data})
        },
        updateSign ({state, commit}, {type, data}) {
            console.log (type, data)
            const payload = {
                name: 'signData',
                data: Object.assign({}, state.selectedForm.signData, {[type]: data})
            }
            commit ('updateSelectedForm', payload )
        },
        saveForm () {

        }
    },
    mutations : {
        setForms (state, payload) {
            state.todayForms = payload;
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
            } else {
                // use old form
                state.selectedForm = selected [0]
            }
        }
    }
}