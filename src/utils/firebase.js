// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSyJb26c1BeIfk6rITCI4kXEoz_bV70i0",
  authDomain: "netflixgpt-17590.firebaseapp.com",
  projectId: "netflixgpt-17590",
  storageBucket: "netflixgpt-17590.firebasestorage.app",
  messagingSenderId: "232308137879",
  appId: "1:232308137879:web:34c3d2876799dbd5a66ed2",
  measurementId: "G-4NF9GLE58Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);