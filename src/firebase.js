import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJVY-e3ej8UReJRx4871C4046WDjiHVnI",
  authDomain: "clone-f512b.firebaseapp.com",
  projectId: "clone-f512b",
  storageBucket: "clone-f512b.appspot.com",
  messagingSenderId: "375943617716",
  appId: "1:375943617716:web:2d666c18ac19f3b6ea8be1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 
