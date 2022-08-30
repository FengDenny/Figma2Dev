import React from "react";
import MobileNavStyles from "./MobileNavbar.module.css";
import globalStyles from "../../../global.module.css";
import { links } from "../../../data/links";

export default function MobileMenu(props) {
  let menu = [`${MobileNavStyles.sideMenu}`];

  if (props.show) {
    menu = [`${MobileNavStyles.sideMenu}`, `${MobileNavStyles.open}`];
  }
  return (
    <nav className={menu.join(" ")}>
      <button className={MobileNavStyles.cross} onClick={props.close}>
        x
      </button>
      <ul className={`${globalStyles.dFlexColumn} ${MobileNavStyles.mobile}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.ahref}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
