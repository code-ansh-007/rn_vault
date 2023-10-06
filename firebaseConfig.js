import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA70YFplwWWc3fgo9EManiY6RBkV9XzkT4",
  authDomain: "rnauth-1aff0.firebaseapp.com",
  projectId: "rnauth-1aff0",
  storageBucket: "rnauth-1aff0.appspot.com",
  messagingSenderId: "302519883005",
  appId: "1:302519883005:web:cd076a2808f93040af9a94",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
