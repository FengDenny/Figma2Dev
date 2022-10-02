import React from "react";
import styles from "./VerticalLine.module.scss";
export default function VerticalLine({ classNames }) {
  return <div className={`${styles.verticalLine} ${classNames}`} />;
}
