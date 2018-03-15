import firebase from 'firebase'
import store from '../store/index'
import { messages } from '../utils/data'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'

const today = moment().format('l').split("/").join("-").toString()
const db = remoteConfig.database

class MessageAPI {

    constructor () { }

    init () {
        this._messagesDB = firebase.database().ref (db.messages);
        this._setDataToStore ()
    }

    _setDataToStore () {
        this._messagesDB.limitToLast (4).on ('value', (snapshots) => {
            let items = [];
            snapshots.forEach( snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data);
            });
            console.log('DB: ', 'setMessages', snapshots.val());
            store.commit ('setMessages', items);
        });
    }

    submitMessages (payload) {
        this._messagesDB.push (payload)
    }

}

export default new MessageAPI ();