import React, { useState } from "react";
import styles from "./buttons.module.scss";

import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

export default function Signup({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("register");

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
          showModal={showModal}
          closeModal={() => closeModal(setShowModal)}
        />
      }
    </>
  );
}
