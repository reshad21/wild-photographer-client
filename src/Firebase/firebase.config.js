// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhYp2acXXzBkJmYWeG5ywJ3fSUsifaops",
  authDomain: "winter-shopping-center.firebaseapp.com",
  projectId: "winter-shopping-center",
  storageBucket: "winter-shopping-center.appspot.com",
  messagingSenderId: "124027878028",
  appId: "1:124027878028:web:b280bdb7a18f6e80dbd9a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;