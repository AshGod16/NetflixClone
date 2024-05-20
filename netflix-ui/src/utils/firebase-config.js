// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEaL33WdQ09z1lN0w4IDsspgeyH_0VqTE",
  authDomain: "netflix-clone-57a60.firebaseapp.com",
  projectId: "netflix-clone-57a60",
  storageBucket: "netflix-clone-57a60.appspot.com",
  messagingSenderId: "911846688076",
  appId: "1:911846688076:web:a9ef075b2b1a7e0c333be9",
  measurementId: "G-FDX92L4R66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);