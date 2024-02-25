import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyClYyvFHCYVSnURzU-DknJjMuIPRjhQwgI',
  authDomain: 'icowea-72ba3.firebaseapp.com',
  databaseURL: 'https://icowea-72ba3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'icowea-72ba3',
  storageBucket: 'icowea-72ba3.appspot.com',
  messagingSenderId: '873283364728',
  appId: '1:873283364728:web:4bdd9dc7f2815a339e4a8d'
};

const app = initializeApp(firebaseConfig);

export const appAuth = getAuth(app);

export const database = getDatabase(app);
