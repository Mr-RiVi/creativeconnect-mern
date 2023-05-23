// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAQ5mk2EWV526sVtnlvCxold-o-7n-JyE",
  authDomain: "creative-connect-4d163.firebaseapp.com",
  projectId: "creative-connect-4d163",
  storageBucket: "creative-connect-4d163.appspot.com",
  messagingSenderId: "243362610016",
  appId: "1:243362610016:web:f32f1a88e712abb780bc05",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig, "app1");
export const storage_inventor = getStorage(app);
