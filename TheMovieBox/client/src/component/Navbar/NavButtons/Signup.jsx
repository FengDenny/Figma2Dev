import React from "react";
import styles from "./buttons.module.scss";

export default function Signup({ mobile }) {
  return (
    <button
      className={mobile ? styles.signupBtnMobile : styles.signupBtnDesktop}
    >
      Signup
    </button>
  );
}
