import Vue from 'vue'
import Vuex from 'vuex'
import { vehicles, employees, posts, messages } from '../utils/data'
import { accountInfo, localConfig, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'

Vue.use (Vuex)

// state
export default new Vuex.Store ({
    state: {
      userInfo : {
        account: '',
        username: ''
      },
      messages: [],
      allforms: {},
      forms: {}, // today's form
      selectedForm: {} // set currentItem
    },
    mutations: {
      setUserInfo (state, payload) {
        state.userInfo.account = payload.account
        state.userInfo.username = payload.username
      },

      setMessages (state, payload) {
        // get the latest 15
        state.messages = payload;
      },

      setForms (state, payload) {
        state.allforms = payload;
        // sort forms by dates
        // TODO: Get the form for today, the rest of them will sorted and display
      },
      updateSelectedForm (state, payload) {
        console.assert (payload.formType && payload.formName)

        //updateSelectedForm
        if (!state.selectedForm [payload.name]) {
          state.selectedForm [payload.name] = ''
        }
        state.selectedForm [payload.name] = payload.data;
      },
      setSelectedForm (state, payload) {

        if (!state.forms [payload.formType]) {
            state.forms [payload.formType] = {}
        }

        // create new form if not exist
        if (!state.forms [payload.formType][payload.formName]) {
            const newForm = { signData: { signA: {}, signB: {}, signC: {}} }
            state.forms [payload.formType][payload.formName] = newForm  //--> this happen only when saving form
            state.selectedForm = newForm
        } else {
            // use old form
            state.selectedForm = state.forms [payload.formType][payload.formName]
        }
      }
    }
});