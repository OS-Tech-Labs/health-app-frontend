import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const API_BASE_URL = "localhost:3002" // Replace with your actual API server URL
// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

export const API_BASE_URL = "localhost:3002" // Replace with your actual API server URL
export { app, analytics }
