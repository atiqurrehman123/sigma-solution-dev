import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrT3ZDcVwfzmRQXc9sSgY0cl2jzgyYJgc",
  authDomain: "multi-form-4e788.firebaseapp.com",
  projectId: "multi-form-4e788",
  storageBucket: "multi-form-4e788.appspot.com",
  messagingSenderId: "566782476092",
  appId: "1:566782476092:web:e2ebec7064884c7c642839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth=getAuth(app)
export {db,auth}