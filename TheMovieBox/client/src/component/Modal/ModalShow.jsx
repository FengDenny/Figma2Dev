import Modal from "./Modal";
import AnimationStyles from "./Animations.module.scss";
import MovieInfo from "../MoviesType/MovieInfo/MovieInfo";
import MovieInfoStyles from "../MoviesType/MovieInfo/MovieInfo.module.scss";

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