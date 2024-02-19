// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANDRn90JnraeWi5mxxnmV_Als5yFUTzLI",
  authDomain: "profile-app-e25e7.firebaseapp.com",
  databaseURL: "https://profile-app-e25e7-default-rtdb.firebaseio.com",
  projectId: "profile-app-e25e7",
  storageBucket: "profile-app-e25e7.appspot.com",
  messagingSenderId: "440494603149",
  appId: "1:440494603149:web:9d75e85607159137d09bc4",
  measurementId: "G-G2HZFFNPM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);