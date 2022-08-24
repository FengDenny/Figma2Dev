import React from 'react'
import NavStyles from "./navbar.module.css"
import globalStyles from "../../global.module.css";
import NavLogo from "../../img/navLogo.png"
import {links} from "../../data/links"


export default function Navbar() {
  return (
    <div className={NavStyles.nav}>
    <nav className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween}`}>
     <div className={globalStyles.dFlex}>
        <img src={NavLogo} alt="logo" className={NavStyles.logo} />
        <h1 className={NavStyles.navLogo}>Noren.</h1>
     </div>
     <ul className={globalStyles.dFlex}>
       {
        links.map((link)=> ( <li key={link.id}><a href={link.ahref}>{link.name}</a></li>))
       }
     </ul>
     </nav>
    </div>
  )
}
