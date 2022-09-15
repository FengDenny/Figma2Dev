import React from "react";
import styles from "./Mobile.module.scss";
import { IoIosClose } from "react-icons/io";
// import { navigations } from "../../data/navigation";

export default function MobileMenu(props) {
  let menu = [`${styles.sideMenu}`];

  if (props.show) {
    menu = [`${styles.sideMenu}`, `${styles.open}`];
  }

  return (
    <nav className={menu.join(" ")}>
      <button className={styles.closeBtn} onClick={props.close}>
        <IoIosClose size={40} />
      </button>
    </nav>
  );
}
