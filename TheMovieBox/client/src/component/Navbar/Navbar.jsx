import React from "react";
import styles from "./Navbar.module.scss";
import global from "../../global.module.scss";
import { useNavigate } from "react-router-dom";
import ToggleMobileNav from "./mobile/ToggleMobileNav";
import Searchbar from "./Searchbar/Searchbar";
import Login from "./NavButtons/Login";
import Signup from "./NavButtons/Signup";

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navigate = useNavigate();

  const toggleOpen = () => {
    return setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    return setMobileMenuOpen(false);
  };

  return (
    <div className={`${styles.container} ${styles.navbar}`}>
      <nav className={styles.nav}>
        <div
          className={`${global.container} ${global.dFlexRow} ${global.spaceBetween}`}
        >
          <img
            className={styles.logo}
            src={require("../../image/Logo.png")}
            alt='TheMovieBox'
            onClick={() => navigate("/")}
          />
          <div className={styles.desktopNav}>
            <Searchbar />
            <div className={styles.navButtons}>
              <Login desktop />
              <Signup desktop />
            </div>
          </div>
          <div className={styles.toggleBtn}>
            <ToggleMobileNav
              show={mobileMenuOpen}
              toggle={toggleOpen}
              close={closeMobileMenu}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
