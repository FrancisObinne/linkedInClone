import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvcvRtkIkmDaqNQZ73ROeRrzEIW1eqbtw",
  authDomain: "obinne-portfolio.firebaseapp.com",
  projectId: "obinne-portfolio",
  storageBucket: "obinne-portfolio.appspot.com",
  messagingSenderId: "831726666179",
  appId: "1:831726666179:web:3f1fa49506d6b1bd78fd76",
  measurementId: "G-91ETVCD2JM"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }