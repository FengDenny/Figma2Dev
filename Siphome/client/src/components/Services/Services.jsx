import React, { useState } from "react";
import "./Services.scss";
import { serviceHeader, services } from "../../data/services";
import { Slider } from "../Slider/Slider";
import isMobile from "../MobileScreenCheck/MobileScreenCheck";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
export default function Services() {
  return (
    <section className='services-container'>
      <div className='container'>
        <div className='services-header'>
          {serviceHeader.map((data) => (
            <div key={data.id}>
              <ScrollAnimation
                showClass='fadeTop'
                content={<h3>{data.title}</h3>}
              />
              <ScrollAnimation
                showClass='fadeLeft'
                content={<h4>{data.header}</h4>}
              />
              <ScrollAnimation
                showClass='fadeBottom'
                content={<p>{data.description}</p>}
              />
              <ScrollAnimation
                showClass='fadeRight'
                content={
                  <img
                    src={require(`../../img/${data.image}`)}
                    alt={data.title}
                  />
                }
              />
            </div>
          ))}
        </div>
        <div className='services-info'>
          {isMobile() ? (
            <Slider slides={services} startNumber={1}>
              {(data) => (
                <ScrollAnimation
                  showClass='fadeRight'
                  content={
                    <div className='services-slider' key={data.id}>
                      <img
                        src={require(`../../img/${data.icon}`)}
                        alt={data.title}
                      />
                      <h3>{data.title}</h3>
                    </div>
                  }
                />
              )}
            </Slider>
          ) : (
            services.map((data) => (
              <ScrollAnimation
                showClass={
                  data.id === 1 || data.id === 4 || data.id === 7
                    ? "fadeTop"
                    : "fadeBottom"
                }
                content={
                  <div className='services-slider' key={data.id}>
                    <img
                      src={require(`../../img/${data.icon}`)}
                      alt={data.title}
                    />
                    <h3>{data.title}</h3>
                  </div>
                }
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
