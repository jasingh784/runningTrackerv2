// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqzjs0uo-Nwd-K42ZsSjX0lHtbh4Bm-HI",
  authDomain: "runningtrackerv2.firebaseapp.com",
  projectId: "runningtrackerv2",
  storageBucket: "runningtrackerv2.appspot.com",
  messagingSenderId: "341350737744",
  appId: "1:341350737744:web:e9d908547f7aaa58b2ee55"
};

// Initialize Firebase
export const myFirebase = initializeApp(firebaseConfig);