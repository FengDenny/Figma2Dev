import React from "react";
import styles from "../Hero.module.scss";

export default function ViewInfoButton({ title, handleClick }) {
  return (
    <button className={styles.buttonRight} onClick={handleClick}>
      {title}
    </button>
  );
}
