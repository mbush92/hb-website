import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyCWwjidRB7udvmTc1U1z1Zv-9PjBkqJDkw",
    authDomain: "hireboticsweb.firebaseapp.com",
    databaseURL: "https://hireboticsweb.firebaseio.com",
    storageBucket: "hireboticsweb.appspot.com",
    messagingSenderId: "819447816255"
  };

export const app = firebase.initializeApp(config);
//console.log('[APP]', app)
