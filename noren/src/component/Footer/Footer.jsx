import React from 'react';
import globalStyles from '../../global.module.css';
import footerStyles from './footer.module.css';
import NavLogo from '../../img/navLogo.png';
import NavStyles from '../../component/Navbar/navbar.module.css';

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween}`}
      >
        <div className={globalStyles.dFlex}>
          <img src={NavLogo} alt="logo" className={NavStyles.logo} />
          <h1 className={NavStyles.navLogo}>Noren.</h1>
        </div>
        <div className={footerStyles.copyright}>
          <h5> 2020 © Ghassan Hani (designer)</h5>
          <h5> 2022 © Denny Feng (developer)</h5>
        </div>
      </div>
    </div>
  );
}
