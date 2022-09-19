import React from "react";
import styles from "./Pricing.module.scss";
import global from "../../global.module.scss";
import Tabs from "./Tab/Tabs";
import animate from "../Animations/animations.module.scss";

export default function Pricing() {
  return (
    <section id='pricing' className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <h2 className={animate.fadeTop}>
            Paid plan starts with a 7-day free trial, <span>No</span> credit
            card required.
          </h2>
        </div>
        <Tabs />
      </div>
    </section>
  );
}
