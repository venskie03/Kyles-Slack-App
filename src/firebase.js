import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWp70S7XoDMiCbAiyKZ1vBq_byD0YcMAY",
  authDomain: "kyles-slack-app.firebaseapp.com",
  projectId: "kyles-slack-app",
  storageBucket: "kyles-slack-app.appspot.com",
  messagingSenderId: "410036489589",
  appId: "1:410036489589:web:57d40f5fb43f90a25ad73c",
  measurementId: "G-8C6ENM3BXS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
