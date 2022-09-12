import React from "react";
import { FeaturesRight } from "../../data/features";
import "./features.scss";
import Section1Img from "../../img/section1.png";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Features() {
  return (
    <section className='features-container'>
      <div className='container'>
        <div className='features-header'>
          <ScrollAnimation
            showClass='fadeLeft'
            content={
              <h2>
                Every day your home faces countless potential threats. Every day
                you face countless potential headaches. A small problem can
                become a major disaster. Early warning signs exist but often you
                can't hear or see them.
              </h2>
            }
          />
          <ScrollAnimation
            showClass='fadeRight'
            content={<img src={Section1Img} alt='questions' />}
          />
        </div>
        <div className='features-info '>
          <div className='features-info-header'>
            <ScrollAnimation showClass='fadeTop' content={<h3> Features</h3>} />
            <ScrollAnimation
              showClass='fadeLeft'
              content={<h4> Meet Siphome</h4>}
            />
            <ScrollAnimation
              showClass='fadeBottom'
              content={
                <p>
                  The most comprehensive smart solution to home maintenance. All
                  it takes is a simple and affordable sensor installation by one
                  of our Siphome certified technicians.
                </p>
              }
            />
          </div>
          <div className='features-info-steps'>
            {FeaturesRight.map((data) => (
              <ScrollAnimation
                key={data.id}
                showClass={`${
                  data.id === 1 || data.id === 2
                    ? "fadeTop"
                    : (data.id === 3 || data.id === 4) && "fadeBottom"
                }`}
                content={
                  <div>
                    <img
                      src={require(`../../img/${data.image}`)}
                      alt={data.title}
                    />
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
