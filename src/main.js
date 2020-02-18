// Imports the firebase configuration
import './store/firebase'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

import 'src/styles/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.config.productionTip = false

let app = ''

Vue.use(firestorePlugin)
Vue.use(Datetime)

Vue.component('datetime', Datetime);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
