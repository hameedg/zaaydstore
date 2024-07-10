// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgfBJQeyRJNpVEtmEsyOu4zeTcz_DhSB8",
    authDomain: "zaayd-personal-recommedation.firebaseapp.com",
    projectId: "zaayd-personal-recommedation",
    storageBucket: "zaayd-personal-recommedation.appspot.com",
    messagingSenderId: "879190000325",
    appId: "1:879190000325:web:6c8c80412b5e2deacc66ac",
    measurementId: "G-MLVV3MV23B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
