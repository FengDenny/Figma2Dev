import React from "react";
import styles from "./MobileMenu.module.scss";
import btnStyles from "../NavButtons/buttons.module.scss";
import Searchbar from "../Searchbar/Searchbar";
import Login from "../NavButtons/Login";
import Signup from "../NavButtons/Signup";
import { useDispatch, useSelector } from "react-redux";
import { GetFirstName } from "../../../helper/getFirstName";
import { userAction } from "../../../redux/slice/auth/userData-slice";
import { useNavigate, Link } from "react-router-dom";

export default function MobileMenu({ show, close }) {
  const { userData } = useSelector((state) => ({ ...state }));
  const { isLoggedIn, uid } = userData.userInfo;
  const firstName = GetFirstName();
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
            <h3 className={styles.authNotification}>
              Welcome back, {firstName}
            </h3>
            <ul className={styles.navUL}>
              <li>
                <Link to={`/account-setting/${uid}`} className={styles.navLink}>
                  Account Setting
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
