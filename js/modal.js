import obj from './blockScrolled.js';
const { disableScroll, enableScroll } = obj;

export default function modal() {

  const moreFeedbackElems = document.querySelectorAll('.more');
  const videoElem = document.querySelector('.watch-video');

  const modalFeedbackElem = document.querySelector('.modal-feedback');
  const modalVideoElem = document.querySelector('.modal-video');
  const typesOfModal = [modalFeedbackElem, modalVideoElem];

  const openModal = (type) => {
    type.classList.remove('hidden');
    // Disable scrolling (module blockScrolled.js)
    disableScroll();
  };

  const closeModal = (type) => {
    type.classList.add('hidden');
    // Enable scrolling (module blockScrolled.js)
    enableScroll();
  };

  videoElem.addEventListener('click', () => {
    openModal(modalVideoElem);
  });

  moreFeedbackElems.forEach(elem => {
    elem.addEventListener('click', () => {
      openModal(modalFeedbackElem);
    });
  })

  typesOfModal.forEach(typeOfModal => {

    // close modal by click on Esc-key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal(typeOfModal);
    })

    // close modal by click on overlay or by cross on the right top corner
    typeOfModal.addEventListener('click', (event) => {

      const target = event.target;

      if (target.matches('.overlay, .modal__close')) {
        closeModal(typeOfModal)
      }
    })
  })

}
