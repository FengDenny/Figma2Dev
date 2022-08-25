import React from 'react';
import ServiceStyle from './Service.module.css';
import globalStyles from '../../global.module.css';
import { steps } from '../../data/threeSteps';
import Section3 from '../../img/section3.png';
export default function ThreeSteps() {
  return (
    <section id="service" className={ServiceStyle.container}>
      <div
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceAround}`}
      >
        <div className={ServiceStyle.sectionLeft}>
          <img src={Section3} alt="Steps" />
        </div>
        <div className={ServiceStyle.sectionRight}>
          <h2>We take care of your business</h2>
          <p>
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>

          {steps.map((data) => {
            const { id, title } = data;
            return (
              <div className={ServiceStyle.circleGray} key={id}>
                {id === 1 && (
                  <>
                    <div className={ServiceStyle.circleOne}>
                      <h2>{id}</h2>
                    </div>
                    <h3>{title}</h3>
                  </>
                )}
                {id === 2 && (
                  <>
                    <div className={ServiceStyle.circleTwo}>
                      <h2>{id}</h2>
                    </div>
                    <h3>{title}</h3>
                  </>
                )}
                {id === 3 && (
                  <>
                    <div className={ServiceStyle.circleThree}>
                      <h2>{id}</h2>
                    </div>
                    <h3>{title}</h3>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
