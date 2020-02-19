// Import firebase to connect to database and authentication features
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

// Initilize the db and todos collection
var db = null
var todosCollection = null
var tagsCollection = null
var openCollection = null

// Only create the collection if the user is connect to the database so the uid is not null
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // Get the database
      db = firebase.firestore();

      // Create a new collection that contains the user todos; needs to user id as document
      todosCollection = db.collection("todos").doc(firebase.auth().currentUser.uid).collection("user-todos")
      tagsCollection = db.collection("tags").doc(firebase.auth().currentUser.uid).collection("user-tags")
      openCollection = db.collection("open").doc(firebase.auth().currentUser.uid).collection("open-tags")
  } else {
    // No user is signed in.
  }
});

// Export for access in other files
export {db} 
export {todosCollection}
export {tagsCollection}
export {openCollection}