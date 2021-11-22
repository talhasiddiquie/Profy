//to use firebase app

import firebase from 'firebase/compat/app'; //v9

//to use auth

import 'firebase/compat/auth'; //v9

//to use firestore

import 'firebase/compat/firestore';
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKYIDHoQg4j2jbjdkYyBQ9BwskHvb2a18",
  authDomain: "react-app-d5661.firebaseapp.com",
  projectId: "react-app-d5661",
  storageBucket: "react-app-d5661.appspot.com",
  messagingSenderId: "851978918998",
  appId: "1:851978918998:web:afc9a0c98c1323e759eff7",
  measurementId: "G-Y3W3SL9DW8",
});

var db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
