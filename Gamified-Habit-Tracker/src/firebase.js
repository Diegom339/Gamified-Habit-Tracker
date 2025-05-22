// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ✅ Your actual config
const firebaseConfig = {
  apiKey: "AIzaSyB-T1y1M-0uGjJKhBmro8o35z70PgDp9dA",
  authDomain: "habit-hero-55fe1.firebaseapp.com",
  projectId: "habit-hero-55fe1",
  storageBucket: "habit-hero-55fe1.appspot.com",
  messagingSenderId: "1086547508732",
  appId: "1:1086547508732:web:04006a031a29f0d8264679",
  measurementId: "G-YQ4DS66X4C"
};

// ✅ Initialize Firebase and export auth
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
