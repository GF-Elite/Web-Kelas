// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSPIOD4MIkBIJRWbyaWk29HFGmCteDmms",
  authDomain: "asal12.firebaseapp.com",
  projectId: "asal12",
  storageBucket: "asal12.appspot.com",
  messagingSenderId: "947501359244",
  appId: "1:947501359244:web:af47c850e25e4b24f1dba9",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
