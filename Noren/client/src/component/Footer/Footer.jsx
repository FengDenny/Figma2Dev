import React from "react";
import globalStyles from "../../global.module.css";
import footerStyles from "./footer.module.css";
import NavLogo from "../../img/navLogo.png";

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={`${globalStyles.container} ${footerStyles.footer}`}>
        <div className={globalStyles.dFlexRow}>
          <img src={NavLogo} alt='logo' className={footerStyles.logo} />
          <h1 className={footerStyles.navLogo}>Noren.</h1>
        </div>
        <div className={footerStyles.copyright}>
          <h5> 2020 © Ghassan Hani (designer)</h5>
          <h5> 2022 © Denny Feng (developer)</h5>
        </div>
      </div>
    </div>
  );
}
