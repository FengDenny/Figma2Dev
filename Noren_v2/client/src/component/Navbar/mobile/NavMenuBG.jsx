import React from "react";
import MobileNavStyles from "./MobileNavbar.module.css";

export default function NavmenuBG(props) {
  return (
    <div className={MobileNavStyles.navMenuBackground} onClick={props.click} />
  );
}
