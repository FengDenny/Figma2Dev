import React, { useState } from "react";
import styles from "./buttons.module.scss";
import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/slice/auth/userData-slice";

export default function Login({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("login");
  const [data, setData] = useState({
    email: "",
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
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
        const { email, uid, accessToken, displayName, metadata } = res.user;
        const { creationTime, lastSignInTime } = metadata;
        console.log(metadata);
        dispatch(
          userAction.addUserAccountInfo({
            uid,
            accessToken,
            displayName,
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

    setData({ email: "", password: "" });
    if (isLoggedIn) {
      navigate(`/account-setting/${uid}`);
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <button
        className={mobile ? styles.loginBtnMobile : styles.loginBtnDesktop}
        onClick={() => openHeroModal(setShowModal, showModal)}
      >
        Log in
      </button>

      {
        <ModalAuthShow
          active={active}
          setActive={setActive}
          title={
            active === "login" ? "Log in to your account" : "Sign up For Free"
          }
          showModal={showModal}
          handleIncomingData={handleIncomingData}
          accountData={accountData}
          data={data}
          setShowModal={setShowModal}
          closeModal={() => closeModal(setShowModal)}
        />
      }
    </>
  );
}
