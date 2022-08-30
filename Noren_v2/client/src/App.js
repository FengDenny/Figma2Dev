import React, { useState } from "react";

import Navbar from "./component/Navbar/desktop/Navbar";
import NavMenuBG from "./component/Navbar/mobile/NavMenuBG";
import MobileNav from "./component/Navbar/mobile/MobileMenu";
import Home from "./pages/Home";
import Footer from "./component/Footer/Footer";
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
      <MobileNav show={openMobile} close={closeNavMenu} />
      {navMenuBG}
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
