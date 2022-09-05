import React from "react";
import globalStyles from "../../global.module.css";
import contactStyles from "./contact.module.css";
import mailbox from "../../img/mailbox.png";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Contact() {
  return (
    <section id='contact' className={contactStyles.container}>
      <div className={`${globalStyles.container} ${contactStyles.form}`}>
        <form>
          <ScrollAnimation
            showClass={AnimationStyles.fadeTop}
            content={<h3>Get the best project estimation.</h3>}
          />{" "}
          <ScrollAnimation
            showClass={AnimationStyles.opacity}
            content={<input type='email' placeholder='Enter your email' />}
          />
          <ScrollAnimation
            showClass={AnimationStyles.fadeBottom}
            content={<button> Send</button>}
          />
        </form>
        <div>
          <img
            className={contactStyles.formImage}
            src={mailbox}
            alt='mailbox'
          />
        </div>
      </div>
    </section>
  );
}
