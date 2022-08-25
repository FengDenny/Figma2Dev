import React from 'react';
import globalStyles from '../../global.module.css';
import CardStyles from '../../component/Card/card.module.css';
import { cards } from '../../data/cards';
export default function Card() {
  return (
    <div className={CardStyles.container}>
      <div
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceAround}`}
      >
        {cards.map((data) => (
          <div className={CardStyles.card}>
            <img src={require(`../../img/${data.image}`)} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
