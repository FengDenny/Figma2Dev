import React, { useState, useEffect } from "react";
import Logo from "../../img/logo.png";
import MobileMenu from "./mobile/MobileMenu";
import "./Navbar.scss";
import { links } from "../../data/navbar";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [data, setData] = useState(links);

  return (
    <>
      <div className={"nav-container"}>
        <nav className='container'>
          <div className='d-flex-row justify-space-between'>
            <img className='logo' src={Logo} alt='Logo' />
            <button
              className='btn-nav-menu'
              onClick={() => setOpenMenu(!openMenu)}
            >
              Menu
            </button>
            <ul className='desktop-nav'>
              {data.map((data) => {
                const { id, link, ahref } = data;
                return (
                  <li className='desktop-nav-li' key={id}>
                    <a href={ahref}>{link}</a>
                  </li>
                );
              })}
            </ul>
            <div className='desktop-nav-btn'>
              <button className='desktop-btn-left'>Sign In</button>
              <div className='vertical-line' />
              <button className='desktop-btn-right'>Get Started</button>
            </div>
          </div>
        </nav>
      </div>
      {openMenu && (
        <div className={`nav-wrapper-${openMenu}`}>
          <div className={`side-menu side-menu-${openMenu}`}>
            <MobileMenu
              close={() => setOpenMenu(!openMenu)}
              data={data}
              header='Siphome Menu'
              leftBtn='Get Started'
              // leftBtnClick ={console.log('clicked')}
              rightBtn='Sign In'
              rightBtnClick={console.log("clicked")}
            />
          </div>
        </div>
      )}
    </>
  );
}
