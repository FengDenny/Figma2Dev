import React, { useState } from "react";
import styles from "./buttons.module.scss";

import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

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
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn, uid } = userData.userInfo;

  const handleIncomingData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const accountData = async () => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
        const { email, uid, accessToken, metadata } = res.user;
        const { creationTime, lastSignInTime } = metadata;
        console.log(metadata);
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
      })
      .catch((err) => console.log(err.message));

    await updateProfile(auth.currentUser, { displayName: data.fullName }).catch(
      (err) => console.log(err.message)
    );

    setData({ email: "", fullName: "", password: "" });
    if (isLoggedIn) {
      navigate(`/account-setting/${uid}`);
      setShowModal(!showModal);
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
        />
      }
    </>
  );
}
