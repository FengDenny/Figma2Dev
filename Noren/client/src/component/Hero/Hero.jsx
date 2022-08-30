import React from "react";
import HeroStyles from "./Hero.module.css";
import globalStyles from "../../global.module.css";

import HeroImage from "../../img/heroRight.png";
export default function Hero() {
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
          <button>Get Started</button>
        </div>
        <div className={HeroStyles.heroImg}>
          <img src={HeroImage} alt='hero' />
        </div>
      </section>
    </div>
  );
}
