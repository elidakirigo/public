// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTd5UnxZV4cAJn8lrkaq5DsF3S9vDNqOk",
  authDomain: "netflix-clone-2f7af.firebaseapp.com",
  projectId: "netflix-clone-2f7af",
  storageBucket: "netflix-clone-2f7af.appspot.com",
  messagingSenderId: "294153274599",
  appId: "1:294153274599:web:6cb03d9de12525eff0ce42",
  measurementId: "G-J52R0XCXNT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db =  firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db;