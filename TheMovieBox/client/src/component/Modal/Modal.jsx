import React from "react";
import styles from "./Modal.module.scss";
export default function Modal({
  className,
  show,
  children,
  activeStyle,
  hiddenStyle,
}) {
  return (
    <div
      className={`${className} ${styles.container} ${
        show ? activeStyle : hiddenStyle
      } `}
    >
      {children}
    </div>
  );
}
