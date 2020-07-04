import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAcDc6BArqeND6oQozR-XW4tgFra7Q5yEk",
    authDomain: "crwn-db-d3ab8.firebaseapp.com",
    databaseURL: "https://crwn-db-d3ab8.firebaseio.com",
    projectId: "crwn-db-d3ab8",
    storageBucket: "crwn-db-d3ab8.appspot.com",
    messagingSenderId: "101895322941",
    appId: "1:101895322941:web:a77f4fc5af92f97f3d9954",
    measurementId: "G-QCZZC2X0BF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;