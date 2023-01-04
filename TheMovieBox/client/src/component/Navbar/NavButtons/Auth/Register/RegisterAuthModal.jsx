import React from "react";
import authStyles from "../auths.module.scss";
import { usePasswordChecker } from "../../helper/usePasswordChecker";
import passwordStyles from "../../helper/passwordChecker.module.scss";

export default function RegisterAuthModal({
  setActive,
  handleIncomingData,
  accountData,
  data,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  togglePasswordVisiblity,
  passwordShown,
}) {
  const { error, IoIosCheckmarkCircleOutline } = usePasswordChecker(
    data.password
  );

  return (
    <form className={authStyles.authForm}>
      <div className={authStyles.formInput}>
        <label htmlFor='Email'>Email</label>
        <input
          type='email'
          name='email'
          value={data.email}
          onChange={(event) => handleIncomingData(event)}
          required
        />
      </div>
      <div className={authStyles.formInput}>
        <label htmlFor='fullName'>Full name</label>
        <input
          type='text'
          name='fullName'
          value={data.fullName}
          onChange={(event) => handleIncomingData(event)}
          required
        />
      </div>

      <div className={authStyles.formInput}>
        <label htmlFor='password'>Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name='password'
          value={data.password}
          onChange={(event) => handleIncomingData(event)}
          required
        />
        <i
          className={authStyles.showPassword}
          onClick={togglePasswordVisiblity}
        >
          {passwordShown ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </i>
      </div>

      {error &&
        error.map((error, i) => (
          <div
            key={i}
            className={`${passwordStyles.error} ${authStyles.formInput}`}
          >
            <div>
              <span>
                {data.password.length < 8 ? (
                  <IoIosCheckmarkCircleOutline className={passwordStyles.red} />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    className={passwordStyles.green}
                  />
                )}
                {error.passwordLength}
              </span>
            </div>
            <div>
              <span>
                {!data.password.match(/[A-Z]/) ? (
                  <IoIosCheckmarkCircleOutline className={passwordStyles.red} />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    className={passwordStyles.green}
                  />
                )}
                {error.uppercased}
              </span>
            </div>
            <div>
              <span>
                {!data.password.match(/[a-z]/) ? (
                  <IoIosCheckmarkCircleOutline className={passwordStyles.red} />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    className={passwordStyles.green}
                  />
                )}
                {error.lowercased}
              </span>
            </div>
            <div>
              <span>
                {!data.password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/) ? (
                  <IoIosCheckmarkCircleOutline className={passwordStyles.red} />
                ) : (
                  <IoIosCheckmarkCircleOutline
                    className={passwordStyles.green}
                  />
                )}
                {error.numOrSpecialCased}
              </span>
            </div>
          </div>
        ))}

      <div className={authStyles.formInput}>
        <button
          type='button'
          className={authStyles.formSubmit}
          onClick={accountData}
          disabled={
            !data.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
          }
        >
          Sign up
        </button>
      </div>
      <div className={authStyles.formInput}>
        <div className={authStyles.formSwitch}>
          <h3>Have an account?</h3>
          <button
            onClick={() => setActive("login")}
            className={authStyles.formSwitchBtn}
          >
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}
