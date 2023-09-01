// // Import the functions you need from the SDKs you need

// import * as firebase from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const app = firebase.initializeApp({
//   apiKey: process.env.FIRE_BASE_API_KEY,
//   authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
//   projectId: process.env.FIRE_BASE_PROJECT_ID,
//   storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.IRE_BASE_MESSAG_IN_SENDER_ID,
//   appId: process.env.FIRE_BASE_APP_ID,
// });

// // Initialize Firebase
// export const auth = getAuth();
// export default app;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVkHyZWLbr1Uul8Qg4jcFs2KjEmOSs1Q0",
  authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
  projectId: process.env.FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.IRE_BASE_MESSAG_IN_SENDER_ID,
  //   appId: process.process.env.FIRE_BASE_APP_ID,
});

export const auth = app.auth();
export default app;
