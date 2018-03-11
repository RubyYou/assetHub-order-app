import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import socketio from 'socket.io'
import VueSocketIO from 'vue-socket.io'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Routes from './routes.js'
import store from './store'
import App from './app.vue'

//wait unti Duncan sort the message out
//const SocketInstance = socketio ('http://localhost:3001')
Vue.use (Framework7Vue)
//Vue.use (VueSocketIO, SocketInstance)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    domCache: false
  },
  store,
  components: {
    app: App
  }
});