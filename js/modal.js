import obj from './blockScrolled.js';
const { disableScroll, enableScroll } = obj;

export default function modal() {

  const moreElems = document.querySelectorAll('.more');
  const modalElem = document.querySelector('.modal');

  const openModal = () => {
    modalElem.classList.remove('hidden');
    // Disable scrolling (module blockScrolled.js)
    disableScroll();
  };

  const closeModal = () => {
    modalElem.classList.add('hidden');
    // Enable scrolling (module blockScrolled.js)
    enableScroll();
  };

  moreElems.forEach(elem => {
    elem.addEventListener('click', openModal);
  })

  modalElem.addEventListener('click', (event) => {
    const target = event.target;
    // contains() checks for classes, matches() checks for selectors.
    if (target.classList.contains('overlay') ||
      target.classList.contains('modal__close')) closeModal();
    // or such notation (with matches()):
    // if (target.matches('.overlay, .modal__close')) {
    //   closeModal()
    // }
  })
}

//=============== The Example with the Delegation ===============//

// const designBlockElem = document.querySelector('.design-block');

// designBlockElem.addEventListener('click', event => {
//   const target = event.target;
// // matches() checks for selectors.
//   if (target.matches('.more')) {
//     openModal();
//   }
// })

//=============== The end of Example with the Delegation ===============//
