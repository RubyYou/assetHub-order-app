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
      allMessages : []
    },
    mutations: {
      setUserInfo (state, payload) {
        state.userInfo.account = payload.account
        state.userInfo.username = payload.username
      },

      setMessagesByDate (state, { date, messages }) {
        // formate
        const existItem = state.allMessages.find ( (day ) => { return day.date === date })

        if (existItem) {
          existItem.messages = messages
        } else {
          // if date not exist, do a sort and clone
          let clone = state.allMessages.slice (0)
          clone.push ( {date: date, messages: messages}) // day specific messages
          clone.sort((a, b) => {
            const epochA = new Date (a.date).getTime()
            const epochB = new Date (b.date).getTime()
            return epochA - epochB
          })
          state.allMessages = clone
        }
      }
    }
});