import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SetAuthenticate = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      console.log(error.message);
    });
};
