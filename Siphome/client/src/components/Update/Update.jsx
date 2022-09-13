import React from "react";
import "./Update.scss";
import { updateHeader, update } from "../../data/update";
import "../ScrollAnimation/Animations.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";
import section3Dot2 from "../../img/section3Dot2.png";

export default function Update() {
  return (
    <section className='update-container' id='desktop'>
      <div className='update-info-header'>
        {updateHeader.map((data) =>
          data.id === 0 ? (
            <div key={data.id}>
              <ScrollAnimation
                showClass='fadeTop'
                content={<h3> {data.title}</h3>}
              />
              <ScrollAnimation
                showClass='fadeBottom'
                content={<h4> {data.description}</h4>}
              />
            </div>
          ) : (
            <ScrollAnimation
              key={data.id}
              showClass={`${
                data.id === 1
                  ? "fadeLeft"
                  : data.id === 2
                  ? "fadeBottom"
                  : "fadeRight"
              }`}
              content={
                <img
                  className={`${
                    data.id === 1
                      ? "update-img"
                      : data.id === 2
                      ? "update-img-2"
                      : "update-img-3"
                  }`}
                  src={require(`../../img/${data.image}`)}
                  alt={`${data.alt}`}
                />
              }
            />
          )
        )}
      </div>
      <div className='update-info'>
        <div className='update-dot'>
          <img src={section3Dot2} alt='dot' />
        </div>
        {update.map((data) => (
          <div className='update-info-card' key={data.id}>
            <ScrollAnimation
              showClass='fadeTop'
              content={
                <img src={require(`../../img/${data.icon}`)} alt={data.title} />
              }
            />
            <ScrollAnimation
              showClass='fadeRight'
              content={<h3>{data.title}</h3>}
            />
            <ScrollAnimation
              showClass='fadeBottom'
              content={<p>{data.description}</p>}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
