import { useState } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import global from "./global.module.scss";
function App() {
  const [open, setOpen] = useState();
  return (
    <div>
      <div className={open && global.overlay}></div>
      <Navbar open={open} setOpen={setOpen} />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
