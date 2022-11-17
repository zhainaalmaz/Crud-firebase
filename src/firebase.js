import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-2MriJMVcWacfKOBKM4bnguhmga1NDxY",
  authDomain: "todo-lms.firebaseapp.com",
  projectId: "todo-lms",
  storageBucket: "todo-lms.appspot.com",
  messagingSenderId: "587721090415",
  appId: "1:587721090415:web:2b59d37aa48fb271eeb49a",
  measurementId: "G-6D0RVB9Q8C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
