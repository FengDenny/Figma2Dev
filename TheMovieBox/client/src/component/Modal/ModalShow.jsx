import Modal from "./Modal";
import AnimationStyles from "./Animations.module.scss";
import MovieInfo from "../MoviesType/MovieInfo/MovieInfo";
import MovieInfoStyles from "../MoviesType/MovieInfo/MovieInfo.module.scss";
import LoginAuth from "../Navbar/NavButtons/Auth/Login/LoginAuthModal";
import RegisterAuth from "../Navbar/NavButtons/Auth/Register/RegisterAuthModal";

export const ModalShow = ({ showModal, closeModal, id, data }) => {
  return (
    <>
      {showModal
        ? id === data.id && (
            <div className={MovieInfoStyles.darkBG}>
              <Modal
                show={showModal}
                className={MovieInfoStyles.heroModal}
                activeStyle={AnimationStyles.active}
                hiddenStyle={AnimationStyles.hidden}
                handleClose={closeModal}
                headerClass={MovieInfoStyles.modalHeader}
                title={data.title}
              >
                <MovieInfo data={data} />
              </Modal>
            </div>
          )
        : null}
    </>
  );
};

export const ModalHeroShow = ({ showModal, closeModal, data }) => {
  return (
    <>
      {showModal && (
        <div className={MovieInfoStyles.darkBG}>
          <Modal
            show={showModal}
            className={MovieInfoStyles.heroModal}
            activeStyle={AnimationStyles.active}
            hiddenStyle={AnimationStyles.hidden}
            handleClose={closeModal}
            headerClass={MovieInfoStyles.modalHeader}
            title={data.title}
          >
            <MovieInfo data={data} />
          </Modal>
        </div>
      )}
    </>
  );
};

export const ModalAuthShow = ({
  showModal,
  closeModal,
  title,
  active,
  setActive,
}) => {
  return (
    <>
      {showModal && (
        <div className={MovieInfoStyles.darkBG}>
          <Modal
            show={showModal}
            className={MovieInfoStyles.heroModal}
            activeStyle={AnimationStyles.active}
            hiddenStyle={AnimationStyles.hidden}
            handleClose={closeModal}
            headerClass={MovieInfoStyles.modalHeader}
            title={title}
          >
            {active === "login" ? (
              <LoginAuth setActive={setActive} />
            ) : (
              <RegisterAuth setActive={setActive} />
            )}
          </Modal>
        </div>
      )}
    </>
  );
};
