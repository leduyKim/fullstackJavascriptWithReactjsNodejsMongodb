import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6qPeB-Rxi55fs8uxN4XNb_vD79Uj8j5M",
    authDomain: "datafornode.firebaseapp.com",
    databaseURL: "https://datafornode.firebaseio.com",
    projectId: "datafornode",
    storageBucket: "datafornode.appspot.com",
    messagingSenderId: "563340050245"
};

firebase.initializeApp(config);

export const firebaseData = firebase.database().ref('dataForNode');
