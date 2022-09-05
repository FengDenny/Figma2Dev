import React, { useState } from "react";
import accompStyles from "./accomplishments.module.css";
import globalStyles from "../../global.module.css";
import numbers from "../../img/numbers.png";
import { numbersData } from "../../data/numbers";
import { FaPlus } from "react-icons/fa";
import { formatValueToK } from "./formatValueToK";
import EmailContactModal from "../Modal/EmailContactModal";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Numbers() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessage("");
    setEmail("");
  };
  return (
    <section id='accomplishment' className={accompStyles.container}>
      <div className={`${globalStyles.container} ${accompStyles.mobile}`}>
        <div className={accompStyles.sectionLeft}>
          <ScrollAnimation
            showClass={AnimationStyles.fadeTop}
            content={<h2>Our numbers</h2>}
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeLeft}
            content={
              <p>
                We have created tons of projects for numerous of users with many
                different employees.
              </p>
            }
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeBottom}
            content={
              <button onClick={() => setShowModal(!showModal)}>
                Let's Talk
              </button>
            }
          />

          {showModal && (
            <EmailContactModal
              title='Send us a message'
              labelOne='Email Address'
              email={email}
              setEmail={(e) => setEmail(e.target.value)}
              emailPlaceholder='JohnDoe@yahoo.com'
              labelTwo='Description'
              placeholderTextArea='Tell us what you need help with'
              message={message}
              setMessage={(e) => setMessage(e.target.value)}
              handleSendMessage={(e) => handleSendMessage(e)}
              btnLabel='Send'
              closeModal={() => setShowModal(!showModal)}
            />
          )}
        </div>
        <div className={accompStyles.sectionRight}>
          <img src={numbers} alt='numbers' />
          {numbersData.map((data) => {
            const { id, number, title } = data;
            return (
              <div key={id}>
                {id === 1 && (
                  <div className={accompStyles.pinkBox}>
                    <ScrollAnimation
                      showClass={AnimationStyles.opacity}
                      content={
                        <h2>
                          {number}
                          <FaPlus />
                        </h2>
                      }
                    />
                    <ScrollAnimation
                      showClass={AnimationStyles.opacityTwo}
                      content={<p>{title}</p>}
                    />
                  </div>
                )}
                {id === 2 && (
                  <div className={accompStyles.lightBlueBox}>
                    <ScrollAnimation
                      showClass={AnimationStyles.opacity}
                      content={
                        <h2>
                          {formatValueToK(number)}
                          <FaPlus />
                        </h2>
                      }
                    />
                    <ScrollAnimation
                      showClass={AnimationStyles.opacityTwo}
                      content={<p>{title}</p>}
                    />
                  </div>
                )}
                {id === 3 && (
                  <div className={accompStyles.babyBlueBox}>
                    <ScrollAnimation
                      showClass={AnimationStyles.opacity}
                      content={
                        <h2>
                          {formatValueToK(number)}
                          <FaPlus />
                        </h2>
                      }
                    />
                    <ScrollAnimation
                      showClass={AnimationStyles.opacityTwo}
                      content={<p>{title}</p>}
                    />
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
