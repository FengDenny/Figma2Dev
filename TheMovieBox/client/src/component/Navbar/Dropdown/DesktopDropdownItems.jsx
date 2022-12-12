import React from "react";
import { Link } from "react-router-dom";

export default function DesktopDropdownItems({ styles, uid, userLoggedOut }) {
  return (
    <div>
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
      <button className={styles.logoutBtn} onClick={userLoggedOut}>
        Logout
      </button>
    </div>
  );
}
