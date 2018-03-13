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
        state.forms = payload;
        // sort forms by dates
      }
    },
    // not sure how do I use this
    actions: {
      increment (context) {
        context.commit('increment')
      }
    }
});