import { useState } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { useRoutes } from "react-router-dom";
import global from "./global.module.scss";
import { app } from "./firebase/firebaseConfig";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import AccountSettings from "./pages/AccountSetting/AccountSettings";
import MyList from "./pages/MyList/MyList";
import SearchData from "./component/Navbar/Searchbar/SearchData";
import ResetPassword from "./component/Navbar/NavButtons/helper/ResetPassword/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      path: "/my-list",
      element: (
        <PrivateRoute>
          <MyList />
        </PrivateRoute>
      ),
    },
    {
      path: "/search",
      element: <SearchData />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);

  return routes;
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className={global.grid}>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Main />
        <ToastContainer
          theme='dark'
          position='top-center'
          autoClose={3000}
          closeOnClick
          hideProgressBar={false}
        />
      </main>
    </div>
  );
}

export default App;
