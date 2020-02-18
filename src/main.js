// Imports the firebase configuration
import './store/firebase'

// Gets the needed frontend and backend support files
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

// Bootstrap custom compiled CSS styles
import 'src/styles/styles.css'

// Packages for dashboard time management
import '@fortawesome/fontawesome-free/css/all.css'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

let app = ''

// Implement the firestore plugin
Vue.use(firestorePlugin)

// Registers components for global use
Vue.component('datetime', Datetime)
Vue.component('v-select', vSelect)

// Reloads app if the auth state changes
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
