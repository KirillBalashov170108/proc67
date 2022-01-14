import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBWt1MkAQj00z0GH3RwonpP-8qKeAQIaEM",
    authDomain: "project-5-30f8c.firebaseapp.com",
    databaseURL: "https://project-5-30f8c-default-rtdb.firebaseio.com",
    projectId: "project-5-30f8c",
    storageBucket: "project-5-30f8c.appspot.com",
    messagingSenderId: "616746276436",
    appId: "1:616746276436:web:b0a323f54e8031a5183fc1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();