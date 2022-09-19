import React, { useState } from "react";
import { Slider } from "./Slider/Slider";
import { testimonials } from "../../data/testimonials";
import { CgQuote } from "react-icons/cg";
import global from "../../global.module.scss";
import styles from "./Testimonials.module.scss";
import animate from "../Animations/animations.module.scss";
import Animate from "../Animations/AnimateOnScroll";

export default function Testimonials() {
  const [visible, setVisible] = useState();
  return (
    <section id='testimonials' className={styles.container}>
      <div className={`${global.container} ${styles.splitContainer}`}>
        <Animate setVisible={setVisible}>
          <div className={`${styles.header} ${visible && animate.fadeLeft}`}>
            <CgQuote />
            <h2>What Customers Say</h2>
          </div>
        </Animate>
        <Animate setVisible={setVisible}>
          <div
            className={`${styles.sliderContainer} ${
              visible && animate.fadeRight
            }`}
          >
            <Slider slides={testimonials}>
              {(data) => (
                <div key={data.id} className={styles.sliderCard}>
                  <CgQuote size={70} className={styles.cgIcon} />
                  <p>{data.testimonial}</p>
                  <h3>
                    {data.name} / {data.occupation}
                  </h3>
                </div>
              )}
            </Slider>
          </div>
        </Animate>
      </div>
    </section>
  );
}
