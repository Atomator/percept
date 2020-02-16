// Imports the firebase configuration
import './store/firebase'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

import 'src/styles/styles.css'

Vue.config.productionTip = false

let app = ''

Vue.use(firestorePlugin)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
