import firebase from 'firebase'
import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'

const Limit = 100
const db = remoteConfig.database

class MessageAPI {

    constructor () { }

    init () {
        this._messagesDB = firebase.database().ref (db.messages);
        this._setDataToStore ()
    }

    _setDataToStore () {
        // in the beginning set limit
        this._messagesDB
            .orderByChild('date')
            .limitToLast (Limit)
            .on ('value', (snapshots) => {
                let items = [];
                snapshots.forEach( snap => {
                    const data = Object.assign ({}, snap.val(), {key: snap.key});
                    if (data.name ) {
                        items.push (data)
                    }
                });
                console.log('DB: ', 'setMessages', snapshots.val(), items);
                store.commit ('setMessages', items);
        });
    }

    submit (payload) {
        this._messagesDB.push (payload)
        // later listen to what's new in the data
    }
}

export default new MessageAPI ();