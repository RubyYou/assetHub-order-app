import Vue from 'vue'
import Vuex from 'vuex'
import { vehicles, employees, posts, messages } from '../utils/data'
import { accountInfo, localConfig, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import forms from './forms'

Vue.use(Vuex)

// state
export default new Vuex.Store({
  modules: {
    forms,
  },
  state: {
    userInfo: {
      account: '',
      username: '',
      roomName: ''
    },
    allMessages: []
  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo.account = payload.account
      state.userInfo.username = payload.username
      state.userInfo.roomName = payload.roomName
    },

    setMessagesByDate (state, { date, messages }) {
      // formate
      const existItem = state.allMessages.find((day) => { return day.date === date })

      if (existItem) {
        existItem.messages = messages
      } else {
        // if date not exist, do a sort and clone
        let clone = state.allMessages.slice(0)
        clone.push({ date: date, messages: messages }) // day specific messages
        clone.sort((a, b) => {
          const epochA = new Date(a.date).getTime()
          const epochB = new Date(b.date).getTime()
          return epochA - epochB
        })
        state.allMessages = clone
      }
    }
  }
});