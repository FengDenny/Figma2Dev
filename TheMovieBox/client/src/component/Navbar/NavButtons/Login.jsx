import React, { useState } from "react";
import styles from "./buttons.module.scss";
import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

export default function Login({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("login");
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
          setShowModal={setShowModal}
          closeModal={() => closeModal(setShowModal)}
        />
      }
    </>
  );
}
