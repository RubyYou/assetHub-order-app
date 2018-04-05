import SockeyIoClient from 'socket.io-client'
import store from '../store/index'
import { remoteConfig } from "../utils/db-config";
import { FormAPI } from './index'
class SocketAPI {

    constructor() {
        this.socket = null
        this.account = null
        this.userName = null
        this.roomName = null
        this.formName = null
        this.staff = 'staff'
        this.vehicle = 'vehicle'
    }

    init () {
        this.socket = SockeyIoClient.connect(remoteConfig.api.socket)
        this._registerData()

        this.socket.emit('join', this.userData)

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
            // store.dispatch('createHistoryData', data.result)
        })

    }

    getForms (date) {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            formName: this.state.formName,
            date: date
        }
        this.socket.emit('getDayForms', this.querytData)
    }

    getRFIDCard () {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cards: remoteConfig.database.cards,
            type: remoteConfig.types.RFID
        }
        this.socket.emit('getRFIDCard', this.querytData)
    }

    getStaffCard () {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cards: remoteConfig.database.cards,
            type: remoteConfig.types.STAFF
        }
        this.socket.emit('getStaffCard', this.querytData)
    }

    getVehicleCard () {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cards: remoteConfig.database.cards,
            type: remoteConfig.types.VEHICLE
        }
        this.socket.emit('getVehicleCard', this.querytData)
    }

    getStaffProfile () {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            staff: remoteConfig.database.profile.staff
        }
        this.socket.emit('getStaffProfile', this.querytData)
    }

    getVehicleProfile () {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            vehicle: remoteConfig.database.profile.vehicle
        }
        this.socket.emit('getVehicleProfile', this.querytData)
    }

    getTodayStaffCardMapping (today) {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cardProfileMapping: remoteConfig.database.cardProfileMapping,
            staff: this.staff,
            date: today
        }
        this.socket.emit('getTodayStaffCardMapping', this.querytData)
    }

    getTodayVehicleCardMapping (today) {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cardProfileMapping: remoteConfig.database.cardProfileMapping,
            vehicle: this.vehicle,
            date: today
        }
        this.socket.emit('getTodayVehicleCardMapping', this.querytData)
    }

    getTodyCheckInHistory (today) {
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            checkinHistory: remoteConfig.database.checkinHistory,
            date: today
        }
        this.socket.emit('getTodyCheckInHistory', this.querytData)

    }

    createStaffProfile (payload) {
        this.state = store.getters.getUserInfo
        this.insertData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            staff: remoteConfig.database.profile.staff,
            payload: payload
        }
        console.log('createStaffProfile', this.insertData)
        this.socket.emit('createStaffProfile', this.insertData)
    }

    deleteStaffProfile (payload) {
        this.state = store.getters.getUserInfo
        this.deleteData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            staff: remoteConfig.database.profile.staff,
            date: payload.today,
            key: payload.key
        }
        console.log('deleteStaffProfile', this.deleteData)
        this.socket.emit('deleteStaffProfile', this.deleteData)
    }

    createVehicleProfile (payload) {
        this.state = store.getters.getUserInfo
        this.insertData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            vehicle: remoteConfig.database.profile.vehicle,
            payload: payload
        }
        console.log('createVehicleProfile', this.insertData)
        this.socket.emit('createVehicleProfile', this.insertData)
    }

    deleteVehiclerofile (payload) {
        this.state = store.getters.getUserInfo
        this.deleteData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            vehicle: remoteConfig.database.profile.vehicle,
            date: payload.today,
            key: payload.key
        }
        console.log('deleteVehiclerofile', this.deleteData)
        this.socket.emit('deleteVehiclerofile', this.deleteData)
    }

    createMapping (payload) {
        this.state = store.getters.getUserInfo
        this.insertData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cardProfileMapping: remoteConfig.database.cardProfileMapping,
            payload: payload
        }
        console.log('createMapping', this.insertData)
        this.socket.emit('createMapping', this.insertData)
    }

    deleteMapping (payload) {
        this.state = store.getters.getUserInfo
        this.deleteData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            cardProfileMapping: remoteConfig.database.cardProfileMapping,
            date: payload.today,
            type: payload.type,
            key: payload.key
        }
        console.log('deleteMapping', this.deleteData)
        this.socket.emit('deleteMapping', this.deleteData)
    }

    createNewForm (formvalues) {
        this.state = store.getters.getUserInfo
        this.insertData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            formName: this.state.formName,
            formvalues: formvalues
        }
        this.socket.emit('createNewForm', this.insertData)
    }

    updateOldForm (key, formvalues) {
        this.state = store.getters.getUserInfo
        this.updateData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            formName: this.state.formName,
            formvalues: formvalues,
            key: key
        }
        this.socket.emit('updateOldForm', this.updateData)
    }

    sendMessage (message) {
        this.state = store.getters.getUserInfo
        this.messageData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            message: message
        }
        this.socket.emit('sendMessage', this.messageData)
    }

    getMessages (date) {
        console.log(date)
        this.state = store.getters.getUserInfo
        this.querytData = {
            userName: this.state.username,
            roomName: this.state.roomName,
            date: date
        }
        this.socket.emit('getMessages', this.querytData)
    }

    _registerData () {
        this.state = store.getters.getUserInfo
        this.userData = {
            account: this.state.account,
            userName: this.state.username,
            roomName: this.state.roomName,
            formName: this.state.formName
        }
    }
}

export default new SocketAPI();