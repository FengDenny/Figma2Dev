import React from 'react';
import SliderStyle from './Slider.module.css';

export default function Slider({
  testimonialData: { id, fullName, occupation, testimonial, image },
}) {
  return (
    <article className={SliderStyle.container}>
      <div className={SliderStyle.card}>
        <div className={SliderStyle.info}>
          <img src={require(`../../img/${image}`)} alt={fullName} />
          <div>
            <h4>{fullName}</h4>
            <p>{occupation}</p>
          </div>
        </div>
        <div className={SliderStyle.slideNumber}>{id}</div>
        <div className={SliderStyle.testimonial}>{testimonial}</div>
      </div>
    </article>
  );
}
