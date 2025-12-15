// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtO55ZEnA-fXCunojOX7nRcQKQv3ySDmw",
  authDomain: "netflix-gpt-a11cc.firebaseapp.com",
  projectId: "netflix-gpt-a11cc",
  storageBucket: "netflix-gpt-a11cc.firebasestorage.app",
  messagingSenderId: "711961475902",
  appId: "1:711961475902:web:9ef562827ad0b37c824a6f",
  measurementId: "G-02PQ2XB5BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);