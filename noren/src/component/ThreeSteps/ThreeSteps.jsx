import React from 'react';
import ThreeStepStyles from './ThreeSteps.module.css';
import globalStyles from '../../global.module.css';
import { steps } from '../../data/threeSteps';
import Section3 from '../../img/section3.png';
export default function ThreeSteps() {
  return (
    <section className={ThreeStepStyles.container}>
      <div
        className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceAround}`}
      >
        <div className={ThreeStepStyles.sectionLeft}>
          <img src={Section3} alt="Steps" />
        </div>
        <div className={ThreeStepStyles.sectionRight}>
          <h2>We take care of your business</h2>
          <p>
            Power your business to new heights with our award-winning digital
            marketing services and technology platform.
          </p>

          {steps.map((data) => {
            const { id, title } = data;
            return (
              <div className={ThreeStepStyles.circleGray} key={id}>
                {id === 1 && (
                  <>
                    <div className={ThreeStepStyles.circleOne}>
                      <h2>{id}</h2>
                    </div>
                    <h3>{title}</h3>
                  </>
                )}
                {id === 2 && (
                  <>
                    <div className={ThreeStepStyles.circleTwo}>
                      <h2>{id}</h2>
                    </div>
                    <h3>{title}</h3>
                  </>
                )}
                {id === 3 && (
                  <>
                    <div className={ThreeStepStyles.circleThree}>
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
