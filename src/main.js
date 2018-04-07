import 'babel-polyfill'
import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Routes from './routes.js'
import store from './store'
import App from './app.vue'
import CacheController from './offline/cacheController'

Vue.use (Framework7Vue)

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