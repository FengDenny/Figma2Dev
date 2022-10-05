export const openDispatchModal = (
  dispatch,
  action,
  setShowModal,
  showModal,
  id
) => {
  dispatch(action.addMovieID(id));
  return setShowModal(!showModal);
};

export const closeModal = (setShowModal) => {
  return setShowModal(false);
};

export const openHeroModal = (setShowModal, showModal) => {
  return setShowModal(!showModal);
};
