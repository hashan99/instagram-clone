import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHXPAsw5TBpokxLlv7ASiK-LsAoHrWpS4",
    authDomain: "insta-clone-spreadin.firebaseapp.com",
    projectId: "insta-clone-spreadin",
    storageBucket: "insta-clone-spreadin.appspot.com",
    messagingSenderId: "428801284003",
    appId: "1:428801284003:web:5d18da28e73ea5cdafec16",
    databaseURL: 'https://project-id.firebaseio.com',
    measurementId: 'G-measurement-id', 
};

firebase.initializeApp(firebaseConfig);