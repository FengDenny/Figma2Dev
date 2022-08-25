import React from 'react';
import testStyles from './testimonials.module.css';
import globalStyles from '../../global.module.css';
import TestImage from '../../img/test0.png';
import Slider from './Slider';
import { testimonialData } from '../../data/testimonials';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
export default function Testimonials() {
  return (
    <section className={testStyles.container}>
      <div className={`${globalStyles.container} ${globalStyles.dFlex}`}>
        <div className={testStyles.leftSection}>
          <img src={TestImage} alt="Testimonials" />
          <h2>What they say?</h2>
          <p>Take a look at what our customers are saying about our work.</p>
        </div>
        <div className={testStyles.rightSection}>
          {testimonialData.map((data) => (
            <Slider testimonialData={data} />
          ))}
          <div className={testStyles.buttons}>
            <button>
              <FiArrowLeft />
            </button>
            <button>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
