import React, { useState } from "react";
import MobileNav from "./components/Navbar/mobile/MobileNav";
import MobileNavMenu from "./components/Navbar/mobile/MobileMenu";
import MobileMenuBg from "./components/Navbar/mobile/MobileNavBG";
import "./global.scss";

function App() {
  let navMenuBg;
  const [openMenu, setOpenMenu] = useState(false);
  const closeNavMenu = () => setOpenMenu(false);

  if (openMenu) return (navMenuBg = <MobileMenuBg click={closeNavMenu} />);
  return (
    <div>
      <MobileNav />
      {/* {navMenuBg} */}
    </div>
  );
}

export default App;
