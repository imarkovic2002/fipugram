import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6pHD1DC5mP3pDYUPUf-kBbVxaB_uViZY",
  authDomain: "fipugram-82727.firebaseapp.com",
  projectId: "fipugram-82727",
  storageBucket: "fipugram-82727.appspot.com",
  messagingSenderId: "356227041672",
  appId: "1:356227041672:web:82f33bfa87fb791f35d23d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };