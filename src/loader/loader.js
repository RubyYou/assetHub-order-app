
import firebase from 'firebase'
import store from '../store/index'

const config = {
    apiKey: "AIzaSyABzMG21mytB-OW1mv37Rfh4tdpvSLaunQ",
    authDomain: "torrid-inferno-9944.firebaseapp.com",
    databaseURL: "https://torrid-inferno-9944.firebaseio.com",
    projectId: "torrid-inferno-9944",
    storageBucket: "torrid-inferno-9944.appspot.com",
    messagingSenderId: "836178416951"
};

const employeeDB = "employee";
const postDB = "post";
const messagesDB = "messages";

class Loader {

    constructor()
    {

        //this._init ();
    }

    // db connection stuff
    _init ()
    {

    }

    _processInfoToStore (dbName, actionName) {

    }

    api () {
        //resolve('success')
        return 'success'
    }

    async login (account, password, username) {
        // Here is a new Promise api talk
        console.log (account, password, username)
        store.commit ('setUserInfo', {account, username})

        const result = await this.api ()
        return result
    }

    getDownloadLink (imageUrl) {

    }
}

export default new Loader ();