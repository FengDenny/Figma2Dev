import React from "react";
import styles from "./MobileMenu.module.scss";
import Searchbar from "../Searchbar/Searchbar";

export default function MobileMenu({ show, close }) {
  return (
    <div className={`${styles.mobileNavWrapper} ${show ? styles.open : null}`}>
      <Searchbar />
    </div>
  );
}
