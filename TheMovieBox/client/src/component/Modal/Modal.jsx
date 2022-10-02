import React from "react";
import styles from "./Modal.module.scss";
import { ImCross } from "react-icons/im";
export default function Modal({
  className,
  show,
  children,
  activeStyle,
  hiddenStyle,
  title,
  handleClose,
  headerClass,
}) {
  return (
    <div
      className={`${className} ${styles.container} ${
        show ? activeStyle : hiddenStyle
      } `}
    >
      <h3 className={headerClass}>{title}</h3>
      <button onClick={handleClose}>
        <ImCross />
      </button>
      {children}
    </div>
  );
}
