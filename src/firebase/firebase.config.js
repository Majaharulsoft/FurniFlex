// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBBUceICNwHsktpzxgqvwh_fAHZ9mgnns0",
//   authDomain: "majaharul-furniflex.firebaseapp.com",
//   projectId: "majaharul-furniflex",
//   storageBucket: "majaharul-furniflex.appspot.com",
//   messagingSenderId: "182906198502",
//   appId:  "1:182906198502:web:ce515ef3b67f3b9ec81e27",
//   // measurementId: import.meta.env.VITE_measurementId,
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
