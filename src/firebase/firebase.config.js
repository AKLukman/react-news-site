import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn3n6__dU2-cJi-xjrZzVV4wZVCRkJxAg",
  authDomain: "news-site-7fda9.firebaseapp.com",
  projectId: "news-site-7fda9",
  storageBucket: "news-site-7fda9.appspot.com",
  messagingSenderId: "1017251439666",
  appId: "1:1017251439666:web:c9bc2dda73ac6cb74ec82b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
