import React from 'react';
import NavStyles from './navbar.module.css';
import globalStyles from '../../global.module.css';
import NavLogo from '../../img/navLogo.png';
import { links } from '../../data/links';
import NavMobileStyle from './mobile/mobileNav.module.css';
import NavMobile from './mobile/Hamburger';

export default function Navbar(props) {
  return (
    <div className={NavStyles.nav}>
      <nav
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween}`}
      >
        <div className={`${globalStyles.dFlex} ${NavStyles.logoContainer}`}>
          <img src={NavLogo} alt="logo" className={NavStyles.logo} />
          <h1 className={NavStyles.navLogo}>Noren.</h1>
        </div>
        <ul className={`${globalStyles.dFlex} ${NavMobileStyle.navItems}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.ahref}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className={NavMobileStyle.toggleBtn}>
          <NavMobile toggle={props.btnToggleHandler} />
        </div>
      </nav>
    </div>
  );
}
