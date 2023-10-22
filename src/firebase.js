// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZoZ2PEE5I1XTU5Ul_3u33P_Mx2IE8L8g",
  authDomain: "tugas-sekolah-c2eb7.firebaseapp.com",
  projectId: "tugas-sekolah-c2eb7",
  storageBucket: "tugas-sekolah-c2eb7.appspot.com",
  messagingSenderId: "864810275610",
  appId: "1:864810275610:web:0705ada2d46bb5ad97d2a3",
  measurementId: "G-ZTF4JR1DK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
