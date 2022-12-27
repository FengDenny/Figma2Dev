import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { database } from "../../../firebase/firebaseConfig";
export default function GetFirstName() {
  const [userID, setUserID] = useState();
  const [firstName, setFirstName] = useState();
  const isMounted = useRef(true);
  const auth = getAuth();

  useEffect(() => {
    const filteredRef = query(
      collection(database, "users"),
      where("uid", "==", `${userID}`)
    );
    const getUserDoc = () =>
      onSnapshot(filteredRef, (results) => {
        results.docs.map((item) => setFirstName(item.data().displayName));
      });

    getUserDoc();
  }, [userID, firstName]);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserID(user.uid);
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return firstName?.split(" ")[0];
}
