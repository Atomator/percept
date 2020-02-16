import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

import 'src/styles/styles.css'

Vue.config.productionTip = false

let app = ''

Vue.use(firebase)

const firebaseConfig = {
  apiKey: "AIzaSyDRGMuaawkPTUZADLoMzJ6-74nb49DYPGU",
  authDomain: "software-development-percept.firebaseapp.com",
  databaseURL: "https://software-development-percept.firebaseio.com",
  projectId: "software-development-percept",
  storageBucket: "software-development-percept.appspot.com",
  messagingSenderId: "561565869986",
  appId: "1:561565869986:web:454e8b0488743af46f34fb",
  measurementId: "G-Y90NJ1PR6Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})
