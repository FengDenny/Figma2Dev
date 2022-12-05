import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./buttons.module.scss";
import { ModalAuthShow } from "../../Modal/ModalShow";
import {
  openHeroModal,
  closeModal,
} from "../../Modal/ModalHelper/ModalHelpers";

import { useAuthStatus } from "../../PrivateRoute/hooks/useAuthStatus";

import { database } from "../../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// redux
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../redux/slice/auth/userData-slice";

export default function Login({ mobile }) {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("login");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useAuthStatus();
  const { userData } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const collectionRef = collection(database, "users");
    const data = await getDocs(collectionRef);
    data.docs.map((item) => {
      return dispatch(
        userAction.addUserCollectionID({
          userID: item.id,
        })
      );
    });
  };

  const handleIncomingData = (event) => {
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const accountData = async () => {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
        const { email, uid, accessToken, displayName, metadata } = res.user;
        const { creationTime, lastSignInTime } = metadata;
        dispatch(
          userAction.addUserAccountInfo({
            uid,
            accessToken,
            displayName,
            email,
            isLoggedIn: loggedIn,
          })
        );
        dispatch(
          userAction.addUserMetaData({
            creationTime,
            lastSignInTime,
          })
        );
      })
      .catch((err) => console.log(err.message));

    setData({ email: "", password: "" });

    if (loggedIn) {
      navigate(`/`);
      setShowModal(!showModal);
    }
  };

  return (
    <>
      <button
        className={mobile ? styles.loginBtnMobile : styles.loginBtnDesktop}
        onClick={() => openHeroModal(setShowModal, showModal)}
      >
        Log in
      </button>

      {
        <ModalAuthShow
          active={active}
          setActive={setActive}
          title={
            active === "login" ? "Log in to your account" : "Sign up For Free"
          }
          showModal={showModal}
          handleIncomingData={handleIncomingData}
          accountData={accountData}
          data={data}
          setShowModal={setShowModal}
          closeModal={() => closeModal(setShowModal)}
        />
      }
    </>
  );
}
