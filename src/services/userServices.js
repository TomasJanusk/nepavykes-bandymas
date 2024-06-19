import firebase from "../firebase";

export const getUserData = (user, setUser) => {
  try {
    firebase
      .firestore()
      .collection("users")
      .where("uid", "==", user?.uid)
      .get()
      .then((userdata) => {
        setUser(userdata.docs[0].data());
      });
  } catch (err) {
    console.log(err);
  }
};
