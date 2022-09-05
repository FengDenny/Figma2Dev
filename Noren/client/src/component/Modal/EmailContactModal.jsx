import React from "react";
import EmailStyles from "./EmailContactModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function EmailContactModal(props) {
  return (
    <div className={`${EmailStyles.container} ${EmailStyles.show}`}>
      <h2>{props.title}</h2>
      <div className={EmailStyles.closeBtn}>
        <button className={EmailStyles.cross} onClick={props.closeModal}>
          <AiOutlineClose />
        </button>
      </div>
      <form className={EmailStyles.form}>
        <div className={EmailStyles.formItems}>
          <label htmlFor='email'>{props.labelOne}</label>
          <input
            type='email'
            name='email'
            placeholder={props.emailPlaceholder}
            value={props.email}
            onChange={props.setEmail}
            required
          />
        </div>
        <div className={EmailStyles.formItems}>
          <label htmlFor='message'>{props.labelTwo}</label>
          <textarea
            name='message'
            placeholder={props.placeholderTextArea}
            value={props.message}
            onChange={props.setMessage}
            maxLength='200'
            required
          />
        </div>
        <div className={EmailStyles.formItems}>
          <button onClick={props.handleSendMessage}>{props.btnLabel}</button>
        </div>
      </form>
    </div>
  );
}
