import firebase from 'firebase';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCIOesfey1TQSOh2sO1C-t2yxEUVPGXanQ",
    authDomain: "guitarbasics-b9795.firebaseapp.com",
    databaseURL: "https://guitarbasics-b9795.firebaseio.com",
    projectId: "guitarbasics-b9795",
    storageBucket: "",
    messagingSenderId: "514542565028"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
