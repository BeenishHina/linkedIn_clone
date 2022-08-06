import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9VAI9br-etwKYS-HcjsHdhWe5JK_v4Y0",
    authDomain: "linkedin-clone-1bf80.firebaseapp.com",
    projectId: "linkedin-clone-1bf80",
    storageBucket: "linkedin-clone-1bf80.appspot.com",
    messagingSenderId: "230905023699",
    appId: "1:230905023699:web:32673514254c865b275826",
    measurementId: "G-TLK8WGQZ21"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage(firebaseApp);
  export {provider, storage, auth};
  export default db;