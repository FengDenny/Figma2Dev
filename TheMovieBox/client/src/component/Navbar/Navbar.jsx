import React from "react";
import styles from "./Navbar.module.scss";
import global from "../../global.module.scss";
import ToggleMobileNav from "./Mobile/ToggleMobileNav";
import Searchbar from "./Searchbar/Searchbar";
import Login from "./NavButtons/Login";
import Signup from "./NavButtons/Signup";
import GetFirstName from "./helper/GetFirstName";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/slice/auth/userData-slice";
import { useNavigate } from "react-router-dom";
import DesktopDropdown from "./Dropdown/DesktopDropdown";
import DesktopNav from "./Desktop/DesktopNav";

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn, uid } = userData.userInfo;
  const firstName = GetFirstName();
  const dispatch = useDispatch();

  const toggleOpen = () => {
    return setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    return setMobileMenuOpen(false);
  };

  const userLoggedOut = () => {
    dispatch(
      userAction.addUserAccountInfo({
        isLoggedIn: false,
      })
    );
    navigate("/");
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
              <DesktopNav styles={styles} />

              {isLoggedIn ? (
                <DesktopDropdown
                  styles={styles}
                  firstName={firstName}
                  uid={uid}
                  userLoggedOut={userLoggedOut}
                />
              ) : (
                <>
                  <Login desktop />
                  <Signup desktop />
                </>
              )}
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
