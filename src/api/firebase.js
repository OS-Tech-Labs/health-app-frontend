// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAp--tW6PFARLnBvQKKdT9Aib5vcbPapI",
  authDomain: "bold-gravity-381911.firebaseapp.com",
  projectId: "bold-gravity-381911",
  storageBucket: "bold-gravity-381911.appspot.com",
  messagingSenderId: "587940631360",
  appId: "1:587940631360:web:e24251ff7137dc867e20a5",
  measurementId: "G-1ZEYHZ4ZL3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
