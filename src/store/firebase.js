import firebase from 'firebase'

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

// Connect to firestore

var db = null
var todosCollection = null

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        db = firebase.firestore();
        todosCollection = db.collection("todos").doc(firebase.auth().currentUser.uid).collection("user-todos")
    } else {
      // No user is signed in.
    }
  });

export {db} 
export {todosCollection}