import React from "react";
import testStyles from "./testimonials.module.css";
import globalStyles from "../../global.module.css";
import TestImage from "../../img/test0.png";
import Slider from "./Slider";
import { testimonialData } from "../../data/testimonials";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
export default function Testimonials() {
  return (
    <section id='testimonials' className={testStyles.container}>
      <div className={`${globalStyles.container} ${testStyles.mobile}`}>
        <div className={testStyles.leftSection}>
          <ScrollAnimation
            showClass={AnimationStyles.fadeTop}
            content={<img src={TestImage} alt='Testimonials' />}
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeLeft}
            content={<h2>What they say?</h2>}
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeBottom}
            content={
              <p>
                Take a look at what our customers are saying about our work.
              </p>
            }
          />
        </div>
        <div className={testStyles.rightSection}>
          {testimonialData.slice(0, 2).map((data) => (
            <ScrollAnimation
              showClass={AnimationStyles.opacity}
              content={<Slider testimonialData={data} key={data.id} />}
            />
          ))}
        </div>
        <div className={testStyles.buttons}>
          <ScrollAnimation
            showClass={AnimationStyles.fadeLeft}
            content={
              <button>
                <FiArrowLeft />
              </button>
            }
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeRight}
            content={
              <button>
                <FiArrowRight />
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
