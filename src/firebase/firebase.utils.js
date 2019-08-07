import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBFE3VKW_LhzpVK_5tCfSmn7Bv9FLnfFJI",
  authDomain: "crwn-clothing-c9704.firebaseapp.com",
  databaseURL: "https://crwn-clothing-c9704.firebaseio.com",
  projectId: "crwn-clothing-c9704",
  storageBucket: "",
  messagingSenderId: "150796188698",
  appId: "1:150796188698:web:f94c9dd0ced03b9f"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;