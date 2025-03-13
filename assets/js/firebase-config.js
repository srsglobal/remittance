// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCsctCsjRTteiO_WU_7O_goBEs44imatho",
    authDomain: "remittanceweb-122c5.firebaseapp.com",
    projectId: "remittanceweb-122c5",
    storageBucket: "remittanceweb-122c5.appspot.com",
    messagingSenderId: "645868497105",
    appId: "1:645868497105:web:f6b030d2bdce0be674fdf0",
    measurementId: "G-1N9LERMEG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
console.log("Firebase Config Loaded!");