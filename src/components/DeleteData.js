import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const DeleteDoc = async (path, uid) => {
    await deleteDoc(doc(db, path, uid));
}