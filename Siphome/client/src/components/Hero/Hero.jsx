import React from "react";
import "./Hero.scss";
import HeroImg1 from "../../img/hero1.png";
import HeroImg2 from "../../img/hero2.png";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
export default function Hero() {
  return (
    <div className='hero-container'>
      <span className='hero-circle' />
      <div className='container d-flex-row justify-space-between'>
        <div className='hero-info d-flex-column'>
          <ScrollAnimation
            showClass='fadeTop'
            content={
              <h1>
                Imagine your home smart enough
                <span className='green'>to take care</span>
                of itself.
              </h1>
            }
          />
          <ScrollAnimation
            showClass='fadeBottom'
            content={
              <p>
                Turn your home into a smarthome today with a simple & affordable
                upgrade. Discover the upgrade that automates home maintenance.
              </p>
            }
          />
          <div className='btn-hero'>
            <ScrollAnimation
              showClass='fadeLeft'
              content={<button className='btn-left'>Get Started</button>}
            />
            <ScrollAnimation
              showClass='fadeRight'
              content={<button className='btn-right'>Learn More</button>}
            />
          </div>
        </div>
        <div className='img-hero d-flex-column'>
          <ScrollAnimation
            showClass='fadeLeft'
            content={<img className='img-left' src={HeroImg1} alt='img1' />}
          />
          <ScrollAnimation
            showClass='fadeRight'
            content={<img className='img-right' src={HeroImg2} alt='img2' />}
          />
        </div>
      </div>
    </div>
  );
}
