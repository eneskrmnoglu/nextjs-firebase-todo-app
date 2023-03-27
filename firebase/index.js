// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClyUUgx95JFmxIN0OmnMZpqG_jw1yX2XQ",
  authDomain: "next-firebase-todo-99a27.firebaseapp.com",
  projectId: "next-firebase-todo-99a27",
  storageBucket: "next-firebase-todo-99a27.appspot.com",
  messagingSenderId: "1002903552887",
  appId: "1:1002903552887:web:1c51dba7dec6ae37959772",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
