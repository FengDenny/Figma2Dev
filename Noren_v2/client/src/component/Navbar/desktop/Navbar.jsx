import React from "react";
import DesktopNavbar from "./Navbar.module.css";
import globalStyles from "../../../global.module.css";
import MobileNavStyles from "../mobile/MobileNavbar.module.css";
import NavMobile from "../mobile/MobileNavbar";
import navLogo from "../../../img/navLogo.png";
import { links } from "../../../data/links";

export default function Navbar(props) {
  return (
    <div className={DesktopNavbar.container}>
      <nav
        className={`${globalStyles.container} ${globalStyles.dFlexRow} ${globalStyles.justifyContentBetween}`}
      >
        <div className={`${globalStyles.dFlexRow} ${DesktopNavbar.logo}`}>
          <img src={navLogo} alt='Logo' />
          <h2>Noren.</h2>
        </div>
        <ul
          className={`${DesktopNavbar.links} ${globalStyles.dFlexRow} ${MobileNavStyles.navItems}`}
        >
          {links.map((links) => {
            const { id, name, ahref } = links;
            return (
              <li key={id}>
                <a href={ahref}>{name}</a>
              </li>
            );
          })}
        </ul>
        <div className={MobileNavStyles.toggleBtn}>
          <NavMobile toggle={props.btnToggleHandler} />
        </div>
      </nav>
    </div>
  );
}
