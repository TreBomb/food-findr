import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu0gX8vjhGx_SZiTycTzApUfbWAyCPqAk",
  authDomain: "foodfindr-ac4b8.firebaseapp.com",
  projectId: "foodfindr-ac4b8",
  storageBucket: "foodfindr-ac4b8.appspot.com",
  messagingSenderId: "166272233830",
  appId: "1:166272233830:web:57434ac36ad3000c6658a7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// if (!firebase.apps.length) {
//   initializeApp({ firebaseConfig });
// } else {
//   firebase.app();
// }
