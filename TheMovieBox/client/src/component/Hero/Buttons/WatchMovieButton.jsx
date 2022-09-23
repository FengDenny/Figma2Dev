import React from "react";
import styles from "../Hero.module.scss";
export default function WatchMovieButton({ title }) {
  return <button className={styles.buttonLeft}>{title}</button>;
}
