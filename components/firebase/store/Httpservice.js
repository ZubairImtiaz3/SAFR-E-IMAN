import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/firebase/store/FireStore";

// READ: Fetch documents from a collection
export const fetchDocuments = async (collectionPath) => {
  const docCollection = collection(db, collectionPath);
  const snapshot = await getDocs(docCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
