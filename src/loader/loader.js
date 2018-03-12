import store from '../store/index'
import { messages } from '../utils/data'

class Loader {

    constructor()
    {

        this._init ();
    }

    // db connection stuff
    _init ()
    {
        store.commit ('setMessages', messages )
    }

    _processInfoToStore (dbName, actionName) {

    }

    api () {
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