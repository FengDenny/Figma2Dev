import React from "react";
import { Slider } from "./Slider/Slider";
import { testimonials } from "../../data/testimonials";
import { CgQuote } from "react-icons/cg";
import global from "../../global.module.scss";
import styles from "./Testimonials.module.scss";
export default function Testimonials() {
  return (
    <section className={styles.container}>
      <div className={`${global.container} ${styles.splitContainer}`}>
        <div className={styles.header}>
          <CgQuote />
          <h2>What Customers Say</h2>
        </div>
        <div className={styles.sliderContainer}>
          <Slider slides={testimonials}>
            {(data) => (
              <div className={styles.sliderCard}>
                <CgQuote size={70} className={styles.cgIcon} />
                <p>{data.testimonial}</p>
                <h3>
                  {data.name} / {data.occupation}
                </h3>
              </div>
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}
