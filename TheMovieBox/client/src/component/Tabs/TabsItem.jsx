import React from "react";
import styles from "./Tab.module.scss";

export default function TabsItem({ handleClick, children, className }) {
  return (
    <li className={`${styles.tabItems} ${className}`} onClick={handleClick}>
      {children}
    </li>
  );
}
