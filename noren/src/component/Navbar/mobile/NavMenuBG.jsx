import React from 'react';
import MobileNavStyle from './mobileNav.module.css';

export default function NavmenuBG(props) {
  return (
    <div className={MobileNavStyle.navMenuBackground} onClick={props.click} />
  );
}
