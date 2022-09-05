import React, { useState } from "react";
import HeroStyles from "./Hero.module.css";
import globalStyles from "../../global.module.css";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

import HeroImage from "../../img/heroRight.png";
import Modal from "../Modal/GetStartedModal";
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
          <ScrollAnimation
            showClass={AnimationStyles.fadeTop}
            content={<h1> Get business solutions with Noren.</h1>}
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeLeft}
            content={
              <p>
                Power your business to new heights with our award-winning
                digital marketing services and technology platform.
              </p>
            }
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeBottom}
            content={
              <button onClick={() => setShowModal(!showModal)}>
                Get Started
              </button>
            }
          />

          {showModal && (
            <Modal
              title='Sign up to get started'
              labelOne='Email Address'
              labelTwo='Password'
              btnLabel='Sign Up'
              email={email}
              password={password}
              showModal={showModal}
              closeModal={() => setShowModal(!showModal)}
              setEmail={(e) => setEmail(e.target.value)}
              setPassword={(e) => setPassword(e.target.value)}
              handleSignUp={(e) => handleSignUp(e)}
            />
          )}
        </div>
        <div className={HeroStyles.heroImg}>
          <ScrollAnimation
            showClass={AnimationStyles.fadeRight}
            content={<img src={HeroImage} alt='hero' />}
          />
        </div>
      </section>
    </div>
  );
}
