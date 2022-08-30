import React from "react";
import MobileNavStyles from "./MobileNavbar.module.css";

export default function MobileNavbar(props) {
  return (
    <div className={MobileNavStyles.container}>
      <button className={MobileNavStyles.buttonToggler} onClick={props.toggle}>
        <div className={MobileNavStyles.toggleBtnLine} />
        <div className={MobileNavStyles.toggleBtnLine} />
        <div className={MobileNavStyles.toggleBtnLine} />
      </button>
    </div>
  );
}
