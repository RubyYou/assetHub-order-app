import Vue from 'vue'
import Vuex from 'vuex'
import { accountInfo, localConfig, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import forms from './forms'
import checkin from './checkin'
import config from './config'

Vue.use(Vuex)

// state
export default new Vuex.Store({
  modules: {
    forms: forms,
    checkin: checkin,
    config: config
  },
  state: {
    userInfo: {
      account: '',
      username: ''
    },
    allMessages: []
  },
  mutations: {
    setUserInfo (state, {account, username} ) {
      state.userInfo.account = account
      state.userInfo.username = username
    },
    setMessagesByDate (state, { date, messages }) {
      // formate
      // console.log ('setMessagesByDate', date, messages)
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
    },
    setPendingMessage (state, { date, message }) {
      const existItem = state.allMessages.find((day) => { return day.date === date })
      if (existItem) {
        const clone = Object.assign({}, message, { pending: true })
        existItem.messages.push(clone)
        console.log('clone', clone)
      }
      console.log('setPendingMessage', state.allMessages, existItem)
    }
  },
  getters: {
    messages: state => {
      return state.allMessages
    },
    getUserInfo: state => {
      return state.userInfo
    }
  }
})