const menuElem = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-list__link');
const humburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);
menuItem.forEach(item => {
  item.addEventListener('click', toggleMenu);
})
