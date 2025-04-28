// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN7V0dzVDmfvs5AB9V8pLl9dcGdqtcSKE",
    authDomain: "dr-shagor-hosen.firebaseapp.com",
    projectId: "dr-shagor-hosen",
    storageBucket: "dr-shagor-hosen.firebasestorage.app",
    messagingSenderId: "203978695066",
    appId: "1:203978695066:web:438cf523b653743e3f9a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;