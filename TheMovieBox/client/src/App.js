import { useState } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import global from "./global.module.scss";
import { app } from "./firebase/firebaseConfig";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import AccountSettings from "./pages/AccountSetting/AccountSettings";
import MyList from "./pages/MyList/MyList";
const Main = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/account-setting/:id",
      element: (
        <PrivateRoute>
          <AccountSettings />,
        </PrivateRoute>
      ),
    },
    {
      path: "/trailers/my-list",
      element: (
        <PrivateRoute>
          <MyList />
        </PrivateRoute>
      ),
    },
  ]);

  return routes;
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className={global.grid}>
      <div className={mobileMenuOpen ? global.overlay : null}></div>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
