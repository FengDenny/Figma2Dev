import React from "react";
import styles from "./Hero.module.scss";
import global from "../../global.module.scss";
import { hero } from "../../data/hero";
import GetStartedButton from "./Button/GetStartedButton";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={`${global.container}`}>
        {hero.map((data) => (
          <div key={data.id} className={styles.hero}>
            <div className={styles.header}>
              <h1>{data.header}</h1>
              <h3>{data.description}</h3>
              <div className={styles.button}>
                <GetStartedButton title={data.buttonTitle} />
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src={require(`../../image/${data.image}`)} alt={data.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
