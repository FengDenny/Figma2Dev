import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/home';
import Footer from './component/Footer/Footer';
import MobileMenu from './component/Navbar/mobile/MobileMenu';
import NavMenuBG from './component/Navbar/mobile/NavMenuBG';
function App() {
  let navMenuBG;
  const [openMobile, setOpenMobile] = useState(false);

  const btnToggleHandler = () => {
    return setOpenMobile(!openMobile);
  };

  const closeNavMenu = () => {
    return setOpenMobile(false);
  };
  if (openMobile) {
    navMenuBG = <NavMenuBG click={closeNavMenu} />;
  }
  return (
    <div>
      <Navbar btnToggleHandler={btnToggleHandler} />
      {/* <MobileMenu show={openMobile} close={closeNavMenu} />
      {navMenuBG} */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
