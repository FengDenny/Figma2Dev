import React from "react";
import styles from "./Mobile.module.scss";
import { IoIosClose } from "react-icons/io";
import { navigations } from "../../../data/navigation";
import RegisterBtn from "../NavButtons/Register";
import LoginBtn from "../NavButtons/Login";

export default function MobileMenu(props) {
  return (
    <div className={`${props.show && styles.overlay}`}>
      <nav className={`${styles.sideMenu} ${props.show && styles.open}`}>
        <button className={styles.closeBtn} onClick={props.close}>
          <IoIosClose size={40} />
        </button>
        <ul className={styles.navItems}>
          {navigations.map((link) => (
            <li key={link.id}>
              <a href={link.ahref}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className={styles.navButton}>
          <div className={styles.buttonNoStyle}>
            <LoginBtn />
          </div>
          <div className={styles.buttonStyle}>
            <RegisterBtn />
          </div>
        </div>
      </nav>
    </div>
  );
}
