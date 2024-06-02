// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0HGZSC0Jrhp4t2IcHdMQbeEDLvfRgCkk",
  authDomain: "learnbasic-35be5.firebaseapp.com",
  projectId: "learnbasic-35be5",
  storageBucket: "learnbasic-35be5.appspot.com",
  messagingSenderId: "516180204223",
  appId: "1:516180204223:web:542632c64532f5d365040a",
  measurementId: "G-TDSV8K9GY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
