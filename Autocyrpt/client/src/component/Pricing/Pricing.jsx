import React, { useState } from "react";
import styles from "./Pricing.module.scss";
import global from "../../global.module.scss";
import Tabs from "./Tab/Tabs";
import animate from "../Animations/animations.module.scss";
import Animate from "../Animations/AnimateOnScroll";

export default function Pricing() {
  const [visible, setVisible] = useState();
  return (
    <section id='pricing' className={styles.container}>
      <div className={global.container}>
        <div className={styles.header}>
          <Animate setVisible={setVisible}>
            <h2 className={visible && animate.fadeTop}>
              Paid plan starts with a 7-day free trial, <span>No</span> credit
              card required.
            </h2>
          </Animate>
        </div>
        <Tabs />
      </div>
    </section>
  );
}
