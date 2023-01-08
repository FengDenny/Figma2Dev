import React, { useState, useEffect } from "react";
import global from "../../global.module.scss";
import styles from "./AccountSetting.module.scss";
import Tabs from "../AccountSetting/SettingTabs/Tabs";

//  firebase
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import { database } from "../../firebase/firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/slice/auth/userData-slice";

import { Toast, UpdateToast } from "../../toastHelper/Toast";

export default function AccountSettings() {
  const { userData } = useSelector((state) => ({ ...state }));
  const { userInfo, metadata, usersCollectionID } = userData;
  const { email, displayName } = userInfo;
  const { creationTime, lastSignInTime } = metadata;
  const { userID } = usersCollectionID;

  const [newData, setNewData] = useState({
    newEmail: "",
    newFullName: "",
  });

  const [newPasswordData, setNewPasswordData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [showHint, setShowHint] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

  const { newEmail, newFullName } = newData;
  const { currentPassword, password, confirmPassword } = newPasswordData;
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

  const handleIncomingUpdatedData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    newData && setNewData({ ...newData, ...inputs });
    newPasswordData && setNewPasswordData({ ...newPasswordData, ...inputs });
  };

  const updateAccountData = async () => {
    let dataToUpdate = doc(database, "users", userID);
    const { email, uid, accessToken, displayName } = auth.currentUser;
    const fullNameElseDisplayName =
      newFullName !== "" ? newFullName : displayName;
    const newEmailElseEmail = newEmail !== "" ? newEmail : email;
    try {
      if (displayName !== newFullName) {
        await updateProfile(auth.currentUser, {
          displayName: fullNameElseDisplayName,
        })
          .then(async () => {
            await updateDoc(dataToUpdate, {
              displayName: fullNameElseDisplayName,
            });
            dispatch(
              userAction.addUserAccountInfo({
                displayName: fullNameElseDisplayName,
                uid,
                email,
                accessToken,
                isLoggedIn: true,
              })
            );

            Toast(
              "success",
              `You have sucessfully changed your name to ${fullNameElseDisplayName} `
            );
          })
          .catch((err) => console.log(err.message));
      }

      if (email !== newEmail) {
        await updateEmail(auth.currentUser, newEmail)
          .then(async () => {
            await updateDoc(dataToUpdate, {
              email: newEmailElseEmail,
            });
            dispatch(
              userAction.addUserAccountInfo({
                displayName: fullNameElseDisplayName,
                uid,
                email: newEmailElseEmail,
                accessToken,
                isLoggedIn: true,
              })
            );

            Toast(
              "success",
              `You have sucessfully changed your email to ${newEmailElseEmail} `
            );
          })
          .catch((err) => console.log(err.message));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateNewPassword = async () => {
    const { email } = auth.currentUser;
    const credentials = EmailAuthProvider.credential(email, currentPassword);

    try {
      await reauthenticateWithCredential(auth.currentUser, credentials).then(
        async () => {
          if (password === confirmPassword) {
            await updatePassword(auth.currentUser, password);
            setNewPasswordData({ ...newPasswordData, ...null });
          } else if (password !== confirmPassword) {
            UpdateToast(
              "error",
              "New password and confirm new password are not the same. "
            );
          } else {
            Toast("success", "Password updated successfully");
          }
        }
      );
    } catch (err) {
      Toast("error", err.message);
    }
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
          updateNewPassword={updateNewPassword}
          newData={newData}
          newPasswordData={newPasswordData}
          userID={userID}
          showHint={showHint}
          setShowHint={setShowHint}
          togglePasswordVisiblity={togglePasswordVisiblity}
          toggleConfirmPasswordVisiblity={toggleConfirmPasswordVisiblity}
          passwordShown={passwordShown}
          confirmPasswordShown={confirmPasswordShown}
        />
      </div>
    </section>
  );
}
