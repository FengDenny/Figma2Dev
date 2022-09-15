import React from "react";
import styles from "./Mobile.module.scss";
import MobileMenu from "./MobileMenu";

export default function ToggleMobileNav(props) {
  return (
    <div className={styles.container}>
      <button className={styles.buttonToggler} onClick={props.toggle}>
        <div className={styles.toggleBtnLine} />
        <div className={styles.toggleBtnLine} />
        <div className={styles.toggleBtnLine} />
      </button>
      <MobileMenu show={props.show} close={props.close} />
    </div>
  );
}
