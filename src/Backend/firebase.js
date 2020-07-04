// import firebase from 'firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyA9EvQdHxCbWfOCzvPO3XsyJ6btkaQLXXI",
    authDomain: "qurbani-de5d5.firebaseapp.com",
    databaseURL: "https://qurbani-de5d5.firebaseio.com",
    projectId: "qurbani-de5d5",
    storageBucket: "qurbani-de5d5.appspot.com",
    messagingSenderId: "51408835239",
    appId: "1:51408835239:web:9f53dfdb067f4010ddc182",
    measurementId: "G-074MDYBP11"
  };
firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
