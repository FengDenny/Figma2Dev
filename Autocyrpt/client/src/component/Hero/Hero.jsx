import React, { useState, useRef } from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import { hero } from "../../data/hero";
import GetStartedButton from "./Button/GetStartedButton";
import animate from "../Animations/animations.module.scss";
import Animate from "../Animations/AnimateOnScroll";

export default function Hero() {
  const [visible, setVisible] = useState();
  return (
    <section className={styles.container}>
      <div className={global.container}>
        {hero.map((data) => (
          <div key={data.id} className={styles.hero}>
            <div className={styles.header}>
              <Animate setVisible={setVisible}>
                <h1 className={`${visible && animate.fadeTop}`}>
                  {data.header}
                </h1>
              </Animate>

              <Animate setVisible={setVisible}>
                <h3 className={`${visible && animate.fadeBottom}`}>
                  {data.description}
                </h3>
              </Animate>
              <Animate setVisible={setVisible}>
                <div
                  className={`${styles.button} ${visible && animate.opacity}`}
                >
                  <GetStartedButton title={data.buttonTitle} />
                </div>
              </Animate>
            </div>
            <Animate setVisible={setVisible}>
              <div
                className={`${styles.heroImage} ${visible && animate.opacity}`}
              >
                <img
                  src={require(`../../image/${data.image}`)}
                  alt={data.alt}
                />
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}
