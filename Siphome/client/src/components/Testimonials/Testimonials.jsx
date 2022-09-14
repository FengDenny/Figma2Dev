import React from "react";
import "./Testimonials.scss";
import { TestimonialsHeader, Testimonial } from "../../data/testimonials";
import Quote from "../../img/quote.png";
import { Slider } from "../Slider/Slider";
import { SliderWithArrow } from "../Slider/components/SliderWithArrows/Slider";
import isMobile from "../MobileScreenCheck/MobileScreenCheck";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
export default function Testimonials() {
  return (
    <section className='testimonials-container'>
      <div className='container'>
        <div className='testimonials-header'>
          {TestimonialsHeader.map((data) => (
            <div key={data.id}>
              <ScrollAnimation
                showClass='fadeTop'
                content={<h3>{data.header}</h3>}
              />
              <ScrollAnimation
                showClass='fadeBottom'
                content={<h4>{data.description}</h4>}
              />
            </div>
          ))}
        </div>
        <div className='testimonials'>
          {isMobile() ? (
            <Slider slides={Testimonial} startNumber={0}>
              {(data) => (
                <ScrollAnimation
                  showClass='fadeBottom'
                  content={
                    <div className='testimonials-card' key={data.id}>
                      <img
                        src={require(`../../img/${data.image}`)}
                        alt={data.name}
                      />
                      <p>“{data.testimony}”</p>
                      <h3>{data.name}</h3>
                      <h5>{data.occupation}</h5>
                      <img src={Quote} alt='quote' />
                    </div>
                  }
                />
              )}
            </Slider>
          ) : (
            <SliderWithArrow
              slides={Testimonial}
              startNumber={0}
              visibleItems={2}
            >
              {(data) => (
                <ScrollAnimation
                  showClass='fadeTop'
                  content={
                    <div className='testimonials-card' key={data.id}>
                      <img
                        src={require(`../../img/${data.image}`)}
                        alt={data.name}
                      />
                      <p>“{data.testimony}”</p>
                      <h3>{data.name}</h3>
                      <h5>{data.occupation}</h5>
                      <img src={Quote} alt='quote' />
                    </div>
                  }
                />
              )}
            </SliderWithArrow>
          )}
        </div>
      </div>
    </section>
  );
}
