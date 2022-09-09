import React, { useState, useEffect } from "react";
import Logo from "../../../img/logo.png";
import MobileMenu from "./MobileMenu";
import "../Navbar.scss";
import { links } from "../../../data/navbar";

export default function MobileNav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [data, setData] = useState(links);

  return (
    <>
      <div className={`side-menu side-menu-${openMenu}`}>
        {openMenu && (
          <MobileMenu close={() => setOpenMenu(!openMenu)} data={data} />
        )}
      </div>
      <div className={"nav-container"}>
        <nav className='container'>
          <div className='d-flex-row justify-space-between'>
            <img src={Logo} alt='Logo' />
            <button
              className='btn-nav-menu'
              onClick={() => setOpenMenu(!openMenu)}
            >
              Menu
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
