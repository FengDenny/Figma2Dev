import React from "react";
import ModalStyle from "./Modal.module.css";
import GlobalStyles from "../../global.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal(props) {
  return (
    <div
      className={`${ModalStyle.container}  ${
        props.showModal ? ` ${ModalStyle.show}` : `${ModalStyle.hide}`
      }`}
    >
      <div className={ModalStyle.closeBtn}>
        <button className={ModalStyle.cross} onClick={props.closeModal}>
          <AiOutlineClose />
        </button>
      </div>
      <div className={GlobalStyles.container}>
        <h2>{props.title}</h2>
        <form className={ModalStyle.form}>
          <div className={ModalStyle.formItems}>
            <label htmlFor='email'>{props.labelOne}</label>
            <input
              type='email'
              name='email'
              placeholder='JohnDoe@gmail.com'
              value={props.email}
              onChange={props.setEmail}
              required
            />
          </div>

          <div className={ModalStyle.formItems}>
            <label htmlFor='email'>{props.labelTwo}</label>
            <input
              type='password'
              name='email'
              placeholder='**************'
              value={props.password}
              onChange={props.setPassword}
              required
            />
          </div>
          <div className={ModalStyle.formItems}>
            <p>
              By signing up, you have agreed to our
              <a href='/'>Terms of Services</a> and
              <a href='/'>Privacy Policy</a>.
            </p>
          </div>
          <div className={ModalStyle.formItems}>
            <button onClick={props.handleSignUp}>{props.btnLabel}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
