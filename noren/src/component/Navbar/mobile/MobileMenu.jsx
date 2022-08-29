import React from 'react';
import mobileNavStyle from './mobileNav.module.css';
import globalStyles from '../../../global.module.css';
import { links } from '../../../data/links';

export default function MobileMenu(props) {
  let menu = [`${mobileNavStyle.sideMenu}`];

  if (props.show) {
    menu = [`${mobileNavStyle.sideMenu}`, `${mobileNavStyle.open}`];
  }
  return (
    <nav className={menu.join(' ')}>
      <button className={mobileNavStyle.cross} onClick={props.close}>
        x
      </button>
      <ul className={`${globalStyles.dFlex} ${mobileNavStyle.mobile}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.ahref}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
