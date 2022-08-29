import React from 'react';
import HeroStyles from './hero.module.css';
import globalStyles from '../../global.module.css';
import HeroImage from '../../img/heroRight.png';

export default function Hero() {
  return (
    <div className={HeroStyles.container}>
      <div
        className={`${HeroStyles.heroWidth} ${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween} ${HeroStyles.mobile}`}
      >
        <div className={HeroStyles.hero}>
          <h2> Get business solutions with Noren.</h2>
          <p>
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>
          <button>Get Started</button>
        </div>
        <div className={HeroStyles.heroImg}>
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
}
