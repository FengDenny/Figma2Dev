import React, { useState } from "react";
import styles from "./buttons.module.scss";

import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

import { app } from "../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Signup({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("register");
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const auth = getAuth();

  const handleIncomingData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const accountData = async () => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err.message));

    await updateProfile(auth.currentUser, { displayName: data.fullName }).catch(
      (err) => console.log(err.message)
    );

    setData({ email: "", fullName: "", password: "" });
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
