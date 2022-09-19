import React from "react";
import styles from "./Footer.module.scss";
import global from "../../global.module.scss";
import { navigations } from "../../data/navigation";
export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={global.container}>
        <div className={styles.copyright}>
          © 2022 Autocrypt. All Rights Reserved.
        </div>
        <ul className={styles.links}>
          {navigations.map((item) => (
            <li key={item.id}>
              <a href={item.ahref}>{item.name}</a>{" "}
              <span className={`${item.id === 3 && styles.lastChild}`}> /</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
