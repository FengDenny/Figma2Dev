import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNav({ styles, mobile }) {
  return (
    <div className={styles.desktopNavItems}>
      <ul className={`${styles.desktopNavUL} ${mobile && styles.mobileNavUL} `}>
        <li>
          <Link to='/' className={styles.desktopNavLink}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
