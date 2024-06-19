import firebase from "../firebase";

export const addClient = (data) => {
  firebase.firestore().collection("clients").add(data);
};
