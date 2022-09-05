import React from "react";
import globalStyles from "../../global.module.css";
import CardStyles from "../../component/Card/card.module.css";
import { cards } from "../../data/cards";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Card() {
  return (
    <section id='service' className={CardStyles.container}>
      <div className={`${globalStyles.container} ${CardStyles.cardContainer}`}>
        {cards.map((data) => (
          <ScrollAnimation
            showClass={`${
              data.id === 1
                ? AnimationStyles.fadeLeft
                : data.id === 2
                ? AnimationStyles.fadeTop
                : AnimationStyles.fadeRight
            }`}
            content={
              <div className={CardStyles.card} key={data.id}>
                <img
                  src={require(`../../img/${data.image}`)}
                  alt={data.title}
                />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}
