import firebase from 'firebase'
import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'
import moment from 'moment'

const Limit = 100
const db = remoteConfig.database
const today = moment().format('l').split("/").join("-").toString()

class MessageAPI {

    constructor () {
        this._daysBeforeToday = 0
    }

    init () {
        this._messagesDB = firebase.database().ref (db.messages);
        this._setTodayMessageDB ()
    }

    _setTodayMessageDB () {
        this._todayMessagesDB = this._messagesDB.child (today)
        this._todayMessagesDB.once ('value', (snapshot) => {
            if (!snapshot.exists ()) {
                const firstNode = {"created": new Date().getTime ()}
                this._todayMessagesDB.set (firstNode)
            }
            this._setDataToStore (this._todayMessagesDB, 'setMessages')
        })
    }

    _setDataToStore (dbRef, actionName) {
        dbRef.on ('value', (snapshots) => {
            let items = [];
            snapshots.forEach( snap => {
                let data = Object.assign ({}, snap.val(), {key: snap.key});
                if (snap.key === "created") {
                    data = {[snap.key]: snap.val()}
                }
                items.push (data)
            });
            console.log('DB: ', actionName, snapshots.val(), items);
            store.commit (actionName, items);
        });
    }

    _getPreviousMessages () {
        this._daysBeforeToday ++
        const previous = moment ().subtract (this._daysBeforeToday, 'days')
                         .format ('l').split ("/").join ("-").toString ()
        console.log ('_getOlderMessages', previous)

        // combine current message with previous message and send to store
        store.commit ('setMessages', items);
    }

    submit (payload) {
        const data = Object.assign({}, payload, {
            username: store.state.userInfo.username,
            time : new Date ().getTime ()
        })
        this._todayMessagesDB.push (data)
    }
}

export default new MessageAPI ();