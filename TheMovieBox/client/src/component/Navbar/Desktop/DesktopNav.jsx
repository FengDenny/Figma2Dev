import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNav({ styles }) {
  return (
    <div className={styles.desktopNavItems}>
      <ul className={styles.desktopNavUL}>
        <li>
          <Link to='/' className={styles.desktopNavLink}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
