import React from 'react';
import accompStyles from './accomplishments.module.css';
import globalStyles from '../../global.module.css';
import numbers from '../../img/numbers.png';
import { numbersData } from '../../data/numbers';
import { FaPlus } from 'react-icons/fa';
import { formatValueToK } from './formatValueToK';

export default function Numbers() {
  return (
    <section id="accomplishment" className={accompStyles.container}>
      <div
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween}`}
      >
        <div className={accompStyles.sectionLeft}>
          <h2>Our numbers</h2>
          <p>
            We have created tons of projects for numerous of users with many
            different employees.
          </p>
          <button>Let's Talk</button>
        </div>
        <div className={accompStyles.sectionRight}>
          <img src={numbers} alt="numbers" />
          {numbersData.map((data) => {
            const { id, number, title } = data;
            return (
              <div key={id}>
                {id === 1 && (
                  <div className={accompStyles.pinkBox}>
                    <h2>
                      {number}
                      <FaPlus />
                    </h2>
                    <p>{title}</p>
                  </div>
                )}
                {id === 2 && (
                  <div className={accompStyles.lightBlueBox}>
                    <h2>
                      {formatValueToK(number)}
                      <FaPlus />
                    </h2>
                    <p>{title}</p>
                  </div>
                )}
                {id === 3 && (
                  <div className={accompStyles.babyBlueBox}>
                    <h2>{number}</h2>
                    <p>{title}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
