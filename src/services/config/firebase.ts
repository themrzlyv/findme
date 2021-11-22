import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAIMaPjRkt4OGl0YorPyBnFiMH446bUU5I",
  authDomain: "findme-web-app.firebaseapp.com",
  projectId: "findme-web-app",
  storageBucket: "findme-web-app.appspot.com",
  messagingSenderId: "873728734687",
  appId: "1:873728734687:web:4e0cff13f3a17a7386406a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const fireStorage = firebase.storage();
export default firebase;