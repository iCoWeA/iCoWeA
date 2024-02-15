import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC1CNW0Q-6I7aQqTxBn-JECIIXyUOIACsQ',
  authDomain: 'icowea-ed3ee.firebaseapp.com',
  databaseURL: 'https://icowea-ed3ee-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'icowea-ed3ee',
  storageBucket: 'icowea-ed3ee.appspot.com',
  messagingSenderId: '450764627942',
  appId: '1:450764627942:web:59554908698e5298528027',
  measurementId: 'G-PEZ0YBCT37'
};

const app = initializeApp(firebaseConfig);

export const appAuth = getAuth(app);

export const database = getDatabase(app);
