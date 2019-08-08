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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error", error.message);
      
    }
  }

  return userRef;

  // console.log(snapShot);
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;