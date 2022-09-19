import React from "react";
import styles from "./Navbar.module.scss";
import global from "../../global.module.scss";
import NavLogo from "../../image/acLogo.png";
import { navigations } from "../../data/navigation";
import RegisterBtn from "./NavButtons/Register";
import LoginBtn from "./NavButtons/Login";
import ToggleMobileNav from "./mobile/ToggleMobileNav";

export default function Navbar({ open, setOpen }) {
  const toggleHandler = () => {
    return setOpen(!open);
  };

  const closeMobileMenu = () => {
    return setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={global.container}>
        <nav
          className={`${styles.nav} ${global.dFlexRow} ${global.spaceBetween}`}
        >
          <img src={NavLogo} alt='Autocrypt' />
          <ul className={styles.navItems}>
            {navigations.map((link) => (
              <li key={link.id}>
                <a href={link.ahref}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className={styles.navButton}>
            <LoginBtn />
            <RegisterBtn />
          </div>
          <div className={styles.toggleBtn}>
            <ToggleMobileNav
              toggle={toggleHandler}
              show={open}
              close={closeMobileMenu}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
