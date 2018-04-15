import store from '../../store/index'
// import { accountInfo, remoteConfig } from '../../utils/db-config'
import Utils from '../../utils/utils'
import request from 'superagent'

class LoginAPI {

    constructor() {
        this._accounts = [] // default setup locally
        this._isRemote = false
        this._remoteLoginUser = null
    }


    start (account, password, username, successHandler, failHandler) {
        this._accounts = store.getters.accounts
        this._isRemote = Utils.isOnline()

        console.assert(typeof successHandler === 'function')
        console.assert(typeof failHandler === 'function')

        this.account = account
        this.password = password
        this.username = username
        this.successHandler = successHandler
        this.failHandler = failHandler

        if (this._isRemote === true) {
            this._signin() // need to update remote DB
        } else {
            // local authentication
            this._authenticate(this._accounts)
        }
    }

    _authenticate (allInfo, account, password) {
        const validatedAccount = allInfo.filter(item => {
            return this.account == item.account && this.password == item.password
        })
        const isValid = validatedAccount.length > 0
        isValid ? this.succcess() : this.fail()
    }

    _signin () {

        const api = store.getters.api
        console.assert (api.url && api.actions)

        request.post(api.url + api.actions.signin)
            .send({
                account: this.account,
                password: this.password
            }).end((err, res) => {
                let user = res.body.results
                if (err || user.length === 0) {
                    this._remoteLoginUser = null
                    this.fail()
                } else {
                    this._remoteLoginUser = user
                    this._accounts = user;
                    this._authenticate(this._accounts)
                }
            })
    }

    succcess () {
        const payload = {
            account: this.account,
            username: this.username
        }
        store.commit('setUserInfo', payload)
        this.successHandler()
    }

    fail () {
        this.failHandler()
    }
}
export default new LoginAPI();