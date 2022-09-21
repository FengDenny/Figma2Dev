import React from "react";
import styles from "./buttons.module.scss";

export default function Login({ mobile }) {
  return (
    <button className={mobile ? styles.loginBtnMobile : styles.loginBtnDesktop}>
      Login
    </button>
  );
}
