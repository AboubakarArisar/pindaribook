import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr8nlfwNQk0NXDfMNWQN3pYHhp6VvpnDo",
  authDomain: "pindaribook.firebaseapp.com",
  projectId: "pindaribook",
  storageBucket: "pindaribook.firebasestorage.app",
  messagingSenderId: "510954292732",
  appId: "1:510954292732:web:0b315d326589e245149e79",
  measurementId: "G-8PLN385DB1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
