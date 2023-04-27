// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPRQ0u2PSTOL_2g-EHKiR-xdci_5f4Cpw",
  authDomain: "react-journalapp-14b46.firebaseapp.com",
  projectId: "react-journalapp-14b46",
  storageBucket: "react-journalapp-14b46.appspot.com",
  messagingSenderId: "27199236925",
  appId: "1:27199236925:web:9f350d9329f2848df07354"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);