import { usePasswordChecker } from "./usePasswordChecker";
import passwordStyles from "./passwordChecker.module.scss";
import authStyles from "../../NavButtons/Auth/auths.module.scss";

export const DisplayError = (data, update) => {
  const { error, IoIosCheckmarkCircleOutline } = usePasswordChecker(
    data.password
  );

  return (
    <>
      {error &&
        error.map((error, i) => (
          <div
            key={i}
            className={`${passwordStyles.error} ${authStyles.formInput}`}
          >
            <div>
              <span className={update && passwordStyles.spanWhite}>
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
              <span className={update && passwordStyles.spanWhite}>
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
              <span className={update && passwordStyles.spanWhite}>
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
              <span className={update && passwordStyles.spanWhite}>
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
    </>
  );
};
