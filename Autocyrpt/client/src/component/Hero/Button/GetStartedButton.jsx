import React from "react";
import styles from "./Button.module.scss";

export default function GetStartedButton({ title }) {
  return <button className={styles.buttonStyle}>{title}</button>;
}
