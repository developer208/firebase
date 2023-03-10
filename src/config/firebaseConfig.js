// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6MCoGBEhDkq-l8wtkCKtHoDuUxeWE2t4",
  authDomain: "coastal-burner-348706.firebaseapp.com",
  projectId: "coastal-burner-348706",
  storageBucket: "coastal-burner-348706.appspot.com",
  messagingSenderId: "813147934686",
  appId: "1:813147934686:web:261047351db9de21a7174f",
  measurementId: "G-QJHDKQN7V0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database=getFirestore(app);
export const storage=getStorage(app);