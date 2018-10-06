import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAv92wKFfLhcDheEZLgrVEB_wi0HTUbMlU",
    authDomain: "notemanager-398c5.firebaseapp.com",
    databaseURL: "https://notemanager-398c5.firebaseio.com",
    projectId: "notemanager-398c5",
    storageBucket: "notemanager-398c5.appspot.com",
    messagingSenderId: "503177399860"
};

firebase.initializeApp(config);

export const firebaseData = firebase.database().ref('dataForNode');
