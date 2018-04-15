import SockeyIoClient from 'socket.io-client'
import store from '../../store/index'
import { FormAPI } from '../index'

class SocketAPI {

    constructor() {
        this.socket = null
        this.userName = null
        this.roomName = null
        this.formName = null
        this.database = null
    }

    init () {

        const socketURL = store.getters.api.socket
        this.database = store.getters.database
        console.assert ( typeof socketURL === 'string' && Object.keys(this.database).length > 0 )

        const userInfo = store.getters.getUserInfo
        this.userName = userInfo.username
        this.roomName = this.database.messages // for messageDB
        this.formName = this.database.forms // formDB

        console.assert (this.userName !== null && this.roomName !== null && this.formName !== null)

        this.socket = SockeyIoClient.connect(socketURL)
        this.socket.emit('join', {userName: this.userName, roomName: this.roomName})

        this.socket.on('getDayMessage', data => {
            store.commit('setMessagesByDate', { date: data.date, messages: data.result })
        })

        this.socket.on('getDayForms', data => {
            store.commit('setForms', data.result)
        })

        this.socket.on('getRFIDCard', data => {
            const payload = { name: 'RFID', data: data.result }
            console.log('getRFIDCard', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getStaffCard', data => {
            const payload = { name: 'staffCardIds', data: data.result }
            console.log('getStaffCard', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getVehicleCard', data => {
            const payload = { name: 'vehicleCardIds', data: data.result }
            console.log('getVehicleCard', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getStaffProfile', data => {
            const payload = { name: 'staff', data: data.result }
            console.log('getStaffProfile', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getVehicleProfile', data => {
            const payload = { name: 'vehicle', data: data.result }
            console.log('getVehicleProfile', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getTodayStaffCardMapping', data => {
            const payload = { name: 'staffCardMapping', data: data.result }
            console.log('getTodayStaffCardMapping', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getTodayVehicleCardMapping', data => {
            const payload = { name: 'vehicleCardMapping', data: data.result }
            console.log('getTodayVehicleCardMapping', payload)
            store.commit('setStateInfo', payload)
        })

        this.socket.on('getTodyCheckInHistory', data => {
            console.log('getTodyCheckInHistory', data.result)
            store.dispatch('createHistoryData', data.result)
        })

    }

    getForms (date) {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            formName: this.formName,
            date: date
        }
        this.socket.emit('getDayForms', this.querytData)
    }

    getRFIDCard () {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            cards: this.database.cards,
            type: store.getters.checkinTypes.RFID
        }
        this.socket.emit('getRFIDCard', this.querytData)
    }

    getStaffCard () {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            cards: this.database.cards,
            type: store.getters.checkinTypes.STAFF
        }
        this.socket.emit('getStaffCard', this.querytData)
    }

    getVehicleCard () {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            cards: this.database.cards,
            type: store.getters.checkinTypes.VEHICLE
        }
        this.socket.emit('getVehicleCard', this.querytData)
    }

    getStaffProfile () {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            profile: this.database.profile,
            type: store.getters.checkinTypes.STAFF
        }
        this.socket.emit('getStaffProfile', this.querytData)
    }

    getVehicleProfile () {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            profile: this.database.profile,
            type: store.getters.checkinTypes.VEHICLE
        }
        this.socket.emit('getVehicleProfile', this.querytData)
    }

    getTodayStaffCardMapping (today) {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            cardProfileMapping: this.database.cardProfileMapping,
            type: store.getters.checkinTypes.STAFF,
            date: today
        }
        this.socket.emit('getTodayStaffCardMapping', this.querytData)
    }

    getTodayVehicleCardMapping (today) {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            cardProfileMapping: this.database.cardProfileMapping,
            type: store.getters.checkinTypes.VEHICLE,
            date: today
        }
        this.socket.emit('getTodayVehicleCardMapping', this.querytData)
    }

    getTodyCheckInHistory (today) {
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            checkinHistory: this.database.checkinHistory,
            date: today
        }
        console.log("querytData", this.querytData)
        this.socket.emit('getTodyCheckInHistory', this.querytData)

    }

    createProfile (payload) {
        this.insertData = {
            userName: this.userName,
            roomName: this.roomName,
            profile: this.database.profile,
            payload: payload
        }
        console.log('createProfile', this.insertData)
        this.socket.emit('createProfile', this.insertData)
    }

    deleteProfile (payload) {
        this.deleteData = {
            userName: this.userName,
            roomName: this.roomName,
            profile: this.database.profile,
            date: payload.today,
            type: payload.type,
            _id: payload._id
        }
        console.log('deleteProfile', this.deleteData)
        this.socket.emit('deleteProfile', this.deleteData)
    }

    createMapping (payload) {
        this.insertData = {
            userName: this.userName,
            roomName: this.roomName,
            cardProfileMapping: this.database.cardProfileMapping,
            payload: payload
        }
        console.log('createMapping', this.insertData)
        this.socket.emit('createMapping', this.insertData)
    }

    deleteMapping (payload) {
        this.deleteData = {
            userName: this.userName,
            roomName: this.roomName,
            cardProfileMapping: this.database.cardProfileMapping,
            date: payload.today,
            type: payload.type,
            _id: payload._id
        }
        console.log('deleteMapping', this.deleteData)
        this.socket.emit('deleteMapping', this.deleteData)
    }

    createNewForm (formvalues) {
        this.insertData = {
            userName: this.userName,
            roomName: this.roomName,
            formName: this.formName,
            formvalues: formvalues
        }
        this.socket.emit('createNewForm', this.insertData)
    }

    updateOldForm (key, formvalues) {
        this.updateData = {
            userName: this.userName,
            roomName: this.roomName,
            formName: this.formName,
            formvalues: formvalues,
            key: key
        }
        this.socket.emit('updateOldForm', this.updateData)
    }

    sendMessage (message) {
        this.messageData = {
            userName: this.userName,
            roomName: this.roomName,
            message: message
        }
        this.socket.emit('sendMessage', this.messageData)
    }

    getMessages (date) {
        console.log(date)
        this.querytData = {
            userName: this.userName,
            roomName: this.roomName,
            date: date
        }
        this.socket.emit('getMessages', this.querytData)
    }
}

export default new SocketAPI();