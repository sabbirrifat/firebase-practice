import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtg-AElOXe_OTgTJDEYsjC9v1qlyPjEi0",
    authDomain: "react-redux-62d70.firebaseapp.com",
    databaseURL: "https://react-redux-62d70.firebaseio.com",
    projectId: "react-redux-62d70",
    storageBucket: "react-redux-62d70.appspot.com",
    messagingSenderId: "1064945721532",
    appId: "1:1064945721532:web:fe3ac28140fc69174370b9",
    measurementId: "G-G6F8B1015V"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

