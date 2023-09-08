import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBxzKLmoiQGFUUQnmXJefAtFxVGxo1IUVs",
  authDomain: "compassfinalchallenge.firebaseapp.com",
  projectId: "compassfinalchallenge",
  storageBucket: "compassfinalchallenge.appspot.com",
  messagingSenderId: "590149890995",
  appId: "1:590149890995:web:f9c9a0dfd857096ce811c6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

export default firebaseConfig;