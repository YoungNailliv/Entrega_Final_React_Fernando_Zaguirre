// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_LucZQ5Vs_wzG_3rVkECuTQqV5_vP81o",
    authDomain: "for-the-record-a46f1.firebaseapp.com",
    projectId: "for-the-record-a46f1",
    storageBucket: "for-the-record-a46f1.appspot.com",
    messagingSenderId: "245894581718",
    appId: "1:245894581718:web:680e689d702e112077e877"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );

export const db = getFirestore( app );