import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8LAhd-m_VRI7rxqmLAUzt5615UPpWz28",
  authDomain: "chit-chat-bc919.firebaseapp.com",
  projectId: "chit-chat-bc919",
  storageBucket: "chit-chat-bc919.firebasestorage.app",
  messagingSenderId: "670586069365",
  appId: "1:670586069365:web:8295d5968a4ee1e475f33c",
};

const appConfig = initializeApp(firebaseConfig);

export default appConfig;
