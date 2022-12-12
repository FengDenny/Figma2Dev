import React from "react";
import styles from "./MobileMenu.module.scss";
import desktopStyles from "../Navbar.module.scss";
import DesktopNav from "../Desktop/DesktopNav";
import btnStyles from "../NavButtons/buttons.module.scss";
import Searchbar from "../Searchbar/Searchbar";
import Login from "../NavButtons/Login";
import Signup from "../NavButtons/Signup";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/slice/auth/userData-slice";
import { useNavigate, Link } from "react-router-dom";

export default function MobileMenu({ show }) {
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn, uid } = userData.userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoggedOut = () => {
    dispatch(
      userAction.addUserAccountInfo({
        isLoggedIn: false,
      })
    );
    navigate("/");
  };

  return (
    <div className={`${styles.mobileNavWrapper} ${show ? styles.open : null}`}>
      <Searchbar />
      <div className={styles.mobileButton}>
        {isLoggedIn ? (
          <>
            <DesktopNav styles={desktopStyles} />
            <ul className={styles.navUL}>
              <li>
                <Link to={`/my-list`} className={styles.navLink}>
                  My List
                </Link>
              </li>
              <li>
                <Link to={`/account-setting/${uid}`} className={styles.navLink}>
                  Settings
                </Link>
              </li>
            </ul>
            <button className={btnStyles.logoutBtn} onClick={userLoggedOut}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Login mobile />
            <Signup mobile />
          </>
        )}
      </div>
    </div>
  );
}
