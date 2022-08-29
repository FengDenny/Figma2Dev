import React from 'react';
import mobileNavStyle from './mobileNav.module.css';
export default function Hamburger(props) {
  return (
    <div className={mobileNavStyle.container}>
      <button className={mobileNavStyle.buttonToggler} onClick={props.toggle}>
        <div className={mobileNavStyle.toggleBtnLine} />
        <div className={mobileNavStyle.toggleBtnLine} />
        <div className={mobileNavStyle.toggleBtnLine} />
      </button>
    </div>
  );
}
