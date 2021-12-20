import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyC2wiPiHwJ_57lXSJh-uxRRjsLXY36PCtY",
  authDomain: "agency04-zadatak.firebaseapp.com",
  databaseURL:
    "https://agency04-zadatak-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agency04-zadatak",
  storageBucket: "agency04-zadatak.appspot.com",
  messagingSenderId: "305838200891",
  appId: "1:305838200891:web:9d7cfc1564d0367055e41e",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
