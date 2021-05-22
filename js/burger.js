export default function burger() {

  const menuElem = document.querySelector('.menu');
  // const menuItem = document.querySelectorAll('.menu-list__link');
  const humburgerElem = document.querySelector('.humburger-menu');

  // Close the burger by clicking on the menu item.
  // menuItem.forEach(item => {
  //   item.addEventListener('click', toggleMenu);
  // })

  const handlerMenu = event => {
    const target = event.target;
    const parent = target.closest('.menu');
    if ((!parent && target !== humburgerElem) ||
      target.classList.contains('menu-list__link')) {
      toggleMenu()
    }
  };

  // Toggle menu by clicking on the burger-menu image
  const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');

    if (menuElem.classList.contains('menu-active')) {
      document.body.addEventListener('click', handlerMenu)
    } else {
      document.body.removeEventListener('click', handlerMenu)
    }
  };

  humburgerElem.addEventListener('click', toggleMenu);
}
