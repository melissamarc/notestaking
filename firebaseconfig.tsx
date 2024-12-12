// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFAE0RZuJXmVUNnvS5-_T45_xRXVBdVFI",
    authDomain: "notestaking-46eff.firebaseapp.com",
    projectId: "notestaking-46eff",
    storageBucket: "notestaking-46eff.firebasestorage.app",
    messagingSenderId: "879304875171",
    appId: "1:879304875171:web:12998b71375a044c933316",
    measurementId: "G-HG813BK6MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);