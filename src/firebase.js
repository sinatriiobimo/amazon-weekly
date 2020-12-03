import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNYUInDDsFSz-5U2e5DT4Gvy2egYozD4U",
    authDomain: "weekly-fa642.firebaseapp.com",
    databaseURL: "https://weekly-fa642.firebaseio.com",
    projectId: "weekly-fa642",
    storageBucket: "weekly-fa642.appspot.com",
    messagingSenderId: "422593999261",
    appId: "1:422593999261:web:3e643ae8f5674091af7f74",
    measurementId: "G-8EH818JDVM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}