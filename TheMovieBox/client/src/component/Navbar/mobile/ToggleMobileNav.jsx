import React from "react";
import styles from "./MobileMenu.module.scss";
import MobileMenu from "./MobileMenu";
export default function ToggleMobileNav({ toggle, show, close }) {
  return (
    <div className={styles.container}>
      <button
        aria-label='Toggle Mobile Menu'
        className={`${styles.buttonToggler} ${show ? styles.open : null}`}
        onClick={toggle}
      >
        <div className={styles.toggleBtnLine} />
        <div className={styles.toggleBtnLine} />
        <div className={styles.toggleBtnLine} />
      </button>
      <MobileMenu show={show} close={close} />
    </div>
  );
}
