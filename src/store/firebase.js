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
export const db = firebase.firestore();
export const todosCollection = db.collection('todos');