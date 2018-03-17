import firebase from 'firebase'
import store from '../store/index'
import { accountInfo, remoteConfig } from '../utils/db-config'
import Utils from '../utils/utils'

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyB1NcYivxsYbTJG4TJofji9ss4O2t5onDo",
    authDomain: "water-safety-construction.firebaseapp.com",
    databaseURL: "https://water-safety-construction.firebaseio.com",
    projectId: "water-safety-construction",
    storageBucket: "",
    messagingSenderId: "971449811253"
}

class LoginAPI {

    constructor () {
        this._accounts = accountInfo // default setup locally
        this._isRemote = false
        this._remoteLoginUser = null
    }

    start (account, password, username, successHandler, failHandler) {

        this._isRemote = Utils.isOnline ()
        console.assert (typeof successHandler === 'function')
        console.assert (typeof failHandler === 'function')

        this.account = account
        this.password = password
        this.username = username
        this.successHandler = successHandler
        this.failHandler = failHandler

        if (this._isRemote === true) {
            this._initFirebase ()
            this._firebaseSignin ()
        } else {
            // local authentication
            this._authenticate (this._accounts)
        }
    }
    _initFirebase () {
        firebase.apps.length <= 0 && firebase.initializeApp (config)
    }

    _authenticate (allInfo, account, password) {
        const validatedAccount = allInfo.filter (item => {
            return this.account == item.account && this.password == item.password
        })
        const isValid = validatedAccount.length > 0
        isValid ? this.succcess () : this.fail ()
    }

    _firebaseSignin () {
        firebase.auth ().signInAnonymously ().catch ( error=> {
            console.log (error)
        })
        firebase.auth ().onAuthStateChanged ((user) => {
            if (user) {
                this._remoteLoginUser = user
                this._authenticateRemotely ()
            } else {
                this._remoteLoginUser = null
                this.fail ()
            }
        })
    }

    _authenticateRemotely () {
        const dbName = remoteConfig.database.accounts
        const databaseRef = firebase.database().ref();

        databaseRef.child (dbName).once ('value', (snapshots) => {
            let items = [];
            console.log('DB: ', dbName, snapshots.val());
            snapshots.forEach( snap => {
                const data = Object.assign ({}, snap.val(), {key: snap.key});
                items.push (data);
            });

            this._accounts = items;
            this._authenticate (this._accounts)
        });
    }

    succcess () {
        const payload = {
            account : this.account,
            username : this.username
        }
        store.commit ('setUserInfo', payload)
        this.successHandler ()
    }

    fail () {
        this.failHandler ()
    }
}
export default new LoginAPI ();