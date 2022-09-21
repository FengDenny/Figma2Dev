import React from "react";
import styles from "./MobileMenu.module.scss";
import Searchbar from "../Searchbar/Searchbar";
import Login from "../NavButtons/Login";
import Signup from "../NavButtons/Signup";

export default function MobileMenu({ show, close }) {
  return (
    <div className={`${styles.mobileNavWrapper} ${show ? styles.open : null}`}>
      <Searchbar />
      <div className={styles.mobileButton}>
        <Login mobile />
        <Signup mobile />
      </div>
    </div>
  );
}
