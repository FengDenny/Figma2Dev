import React from "react";
import styles from "./Buttons.module.scss";

export default function Login() {
  return (
    <div className={styles.button}>
      <button className={styles.buttonNoStyle}>Login</button>
    </div>
  );
}
