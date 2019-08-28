import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBhILMKpp26l1p_xJYGhIXwDzd3pZur--E",
  authDomain: "crwn-db-c2599.firebaseapp.com",
  databaseURL: "https://crwn-db-c2599.firebaseio.com",
  projectId: "crwn-db-c2599",
  storageBucket: "",
  messagingSenderId: "307137270766",
  appId: "1:307137270766:web:06157f41d2eceb8a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
