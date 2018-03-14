import Vue from 'vue'
import Vuex from 'vuex'
import { vehicles, employees, posts, messages } from '../utils/data'
import { accountInfo, localConfig, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import forms from './forms'

Vue.use (Vuex)

// state
export default new Vuex.Store ({
    modules: {
      forms,
    },
    state: {
      userInfo : {
        account: '',
        username: ''
      },
      messages: []
    },
    mutations: {
      setUserInfo (state, payload) {
        state.userInfo.account = payload.account
        state.userInfo.username = payload.username
      },

      setMessages (state, payload) {
        // get the latest 15
        state.messages = payload;
      }
    }
});