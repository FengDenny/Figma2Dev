import React from "react";
import styles from "../Hero.module.scss";

export default function ViewInfoButton({ title }) {
  return <button className={styles.buttonRight}>{title}</button>;
}
