import React from 'react';
import globalStyles from '../../global.module.css';
import contactStyles from './contact.module.css';
import mailbox from '../../img/mailbox.png';

export default function Contact() {
  return (
    <section id="contact" className={contactStyles.container}>
      <div className={`${globalStyles.container} ${contactStyles.form}`}>
        <form>
          <h3>Get the best project estimation.</h3>
          <input type="email" placeholder="Enter your email" />
          <button> Send</button>
        </form>
        <div>
          <img
            className={contactStyles.formImage}
            src={mailbox}
            alt="mailbox"
          />
        </div>
      </div>
    </section>
  );
}
