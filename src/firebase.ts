// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCZW3K1C4wBCBlIHprAhS1Zh8u2kqEM95k',
  authDomain: 'icowea-b35d1.firebaseapp.com',
  databaseURL: 'https://icowea-b35d1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'icowea-b35d1',
  storageBucket: 'icowea-b35d1.appspot.com',
  messagingSenderId: '536815551625',
  appId: '1:536815551625:web:4b140732c096bfcffcf258',
  measurementId: 'G-CWBL20TBRZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
