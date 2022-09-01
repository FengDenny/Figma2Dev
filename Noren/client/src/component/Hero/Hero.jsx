import React, { useState } from "react";
import HeroStyles from "./Hero.module.css";
import globalStyles from "../../global.module.css";

import HeroImage from "../../img/heroRight.png";
import Modal from "../Modal/Modal";
export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className={HeroStyles.container}>
      <section
        className={`${globalStyles.container} ${HeroStyles.heroContainer} `}
      >
        <div className={HeroStyles.hero}>
          <h1> Get business solutions with Noren.</h1>
          <p>
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>
          <button onClick={() => setShowModal(!showModal)}>Get Started</button>
          {showModal && (
            <Modal
              title='Sign up to get started'
              labelOne='Email Address'
              labelTwo='Password'
              btnLabel='Sign Up'
              email={email}
              password={password}
              closeModal={() => setShowModal(!showModal)}
              setEmail={(e) => setEmail(e.target.value)}
              setPassword={(e) => setPassword(e.target.value)}
              handleSignUp={(e) => handleSignUp(e)}
            />
          )}
        </div>
        <div className={HeroStyles.heroImg}>
          <img src={HeroImage} alt='hero' />
        </div>
      </section>
    </div>
  );
}
