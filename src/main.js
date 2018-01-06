import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Routes from './routes.js'
import store from './store'
import App from './app.vue'

Vue.use(Framework7Vue)

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
  // Register App Component
  components: {
    app: App
  }
});