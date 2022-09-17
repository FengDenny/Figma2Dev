import React from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import { hero } from "../../data/hero";
import GetStartedButton from "./Button/GetStartedButton";
import animate from "../Animations/animations.module.scss";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={global.container}>
        {hero.map((data) => (
          <div key={data.id} className={styles.hero}>
            <div className={styles.header}>
              <h1 className={animate.fadeTop}>{data.header}</h1>
              <h3 className={animate.fadeBottom}>{data.description}</h3>
              <div className={`${styles.button} ${animate.opacity}`}>
                <GetStartedButton title={data.buttonTitle} />
              </div>
            </div>
            <div className={`${styles.heroImage} ${animate.opacity}`}>
              <img src={require(`../../image/${data.image}`)} alt={data.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
