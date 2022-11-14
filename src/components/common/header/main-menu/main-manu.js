import { mediaQueryTablet } from 'Utils/variables.js';
const url = window.location.pathname
const menuItemS = document.querySelectorAll('.header .main-menu__item');

if ((url === '/') && (!mediaQueryTablet.matches)) {
  for (let menuItem of menuItemS) {
    menuItem.classList.add('main-menu__item_white');
  }
}
