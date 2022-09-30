import React from "react";
import styles from "../Hero.module.scss";
export default function WatchMovieButton({ title, handleClick }) {
  return (
    <button className={styles.buttonLeft} onClick={handleClick}>
      {title}
    </button>
  );
}
