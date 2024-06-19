import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGOotDOJoWW0uOyL_YCnMktdMY5n1zBy4",
  authDomain: "crud-project-7fb20.firebaseapp.com",
  projectId: "crud-project-7fb20",
  storageBucket: "crud-project-7fb20.appspot.com",
  messagingSenderId: "303747334831",
  appId: "1:303747334831:web:9660c12f29bea5fe954a5a",
};

const app = firebase.initializeApp(firebaseConfig);
export default firebase;

export { app };
