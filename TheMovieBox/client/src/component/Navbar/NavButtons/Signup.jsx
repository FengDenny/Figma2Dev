import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./buttons.module.scss";

import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";
import { database } from "../../../firebase/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/slice/auth/userData-slice";

export default function Signup({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("register");
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => ({
    ...state,
  }));
  const { isLoggedIn } = userData.userInfo;

  const handleIncomingData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const accountData = async () => {
    const auth = getAuth();
    const { email, fullName, password } = data;
    const collectionRef = collection(database, "users");
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (res) => {
          console.log(res.user);
          const { email, uid, accessToken, metadata } = res.user;
          const { creationTime, lastSignInTime } = metadata;
          console.log(metadata);
          await updateProfile(auth.currentUser, { displayName: data.fullName });

          await addDoc(collectionRef, {
            uid,
            email,
            displayName: fullName,
            creationTime,
            lastSignInTime,
          });

          dispatch(
            userAction.addUserAccountInfo({
              uid,
              accessToken,
              displayName: data.fullName,
              email,
              isLoggedIn: true,
            })
          );
          dispatch(
            userAction.addUserMetaData({
              creationTime,
              lastSignInTime,
            })
          );
        }
      );

      setData({ email: "", fullName: "", password: "" });
      if (isLoggedIn) {
        navigate(`/`);
        setShowModal(!showModal);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <button
        className={mobile ? styles.signupBtnMobile : styles.signupBtnDesktop}
        onClick={() => openHeroModal(setShowModal, showModal)}
      >
        Sign up
      </button>

      {
        <ModalAuthShow
          active={active}
          setActive={setActive}
          title={
            active === "login" ? "Log in to your account" : "Sign up For Free"
          }
          handleIncomingData={handleIncomingData}
          accountData={accountData}
          data={data}
          showModal={showModal}
          closeModal={() => closeModal(setShowModal)}
          togglePasswordVisiblity={togglePasswordVisiblity}
          passwordShown={passwordShown}
        />
      }
    </>
  );
}
