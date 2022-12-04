import React, { useState, useEffect } from "react";
import global from "../../global.module.scss";
import styles from "./AccountSetting.module.scss";
import Tabs from "../AccountSetting/SettingTabs/Tabs";

//  firebase
import {
  getAuth,
  updateProfile,
  updateEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { database } from "../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/slice/auth/userData-slice";

export default function AccountSettings() {
  const { userData } = useSelector((state) => ({ ...state }));
  const { userInfo, metadata, usersCollectionID } = userData;
  const { email, displayName } = userInfo;
  const { creationTime, lastSignInTime } = metadata;
  const { userID } = usersCollectionID;
  const [newData, setNewData] = useState({
    newEmail: "",
    newFullName: "",
    newPassword: "",
  });
  const auth = getAuth();
  const dispatch = useDispatch();
  const collectionRef = collection(database, "users");
  useEffect(() => {
    getUserID();
  }, []);

  const getUserID = async () => {
    const data = await getDocs(collectionRef);
    data.docs.map((item) => {
      return dispatch(
        userAction.addUserCollectionID({
          userID: item.id,
        })
      );
    });
  };
  const newEmail = newData.newEmail;

  const handleIncomingUpdatedData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setNewData({ ...newData, ...inputs });
  };

  const updateAccountData = async () => {
    let dataToUpdate = doc(database, "users", userID);

    await updateProfile(auth.currentUser, {
      displayName:
        newData.newFullName !== "" ? newData.newFullName : displayName,
    })
      .then(() => {
        dispatch(
          userAction.addUserAccountInfo({
            displayName:
              newData.newFullName !== "" ? newData.newFullName : displayName,
          })
        );
      })
      .catch((err) => console.log(err.message));

    await updateEmail(auth.currentUser, newEmail !== "" ? newEmail : email)
      .then(() => {
        dispatch(
          userAction.addUserAccountInfo({
            email: newData.newEmail !== "" ? newData.newEmail : email,
          })
        );
      })
      .catch((err) => console.log(err.message));

    await updateDoc(dataToUpdate, {
      email: newData.newEmail !== "" ? newData.newEmail : email,
      displayName:
        newData.newFullName !== "" ? newData.newFullName : displayName,
    })
      .then(() => console.log("Data has been updated! Please log in!"))
      .catch((err) => console.log(err.message));
  };

  return (
    <section className={global.container}>
      <div className={styles.settings}>
        <Tabs
          styles={styles}
          email={email}
          displayName={displayName}
          creationTime={creationTime.substring(0, 16)}
          lastSignInTime={lastSignInTime.substring(0, 16)}
          handleIncomingUpdatedData={handleIncomingUpdatedData}
          updateAccountData={updateAccountData}
          newData={newData}
          userID={userID}
        />
      </div>
    </section>
  );
}
