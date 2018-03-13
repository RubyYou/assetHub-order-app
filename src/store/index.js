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
        name: ''
      },
      messages: [],
      allforms: {},

      // today's form
      forms: {}
    },
    mutations: {
      setUserInfo (state, payload) {
        state.userInfo.account = payload.account
        state.userInfo.name = payload.name
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
      updateForms (state, payload) {
        console.assert (payload.formType, payload.formName)

        if (!state.forms [payload.formType][payload.formName][payload.name]) {
          state.forms [payload.formType][payload.formName][payload.name] = ''
        }

        state.forms [payload.formType] [payload.formName] [payload.name] = payload.data;
      },
      setFormStructure (state, payload) {
        if (!state.forms [payload.formType]) {
          state.forms [payload.formType] = {}
        }
        if (!state.forms [payload.formType][payload.formName]) {
            state.forms [payload.formType][payload.formName] = {}
        }
      }
    }
});