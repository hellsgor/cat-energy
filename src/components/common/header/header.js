import './main-menu/main-manu.js';

import {currentUrl, mainPageHeaderScroll} from 'Utils/variables.js';
import {menuItemS} from 'Utils/variables.js';

const header = document.querySelector('.header');

let currentScroll = 0;

window.addEventListener('scroll', () => {
  currentScroll = window.pageYOffset;

  if ((currentScroll >= mainPageHeaderScroll) && (header.classList.contains('header_with-bg') !== true)) {
    headerWhiteFixed();
  } else if (((currentScroll < mainPageHeaderScroll) && (header.classList.contains('header_with-bg') === true))){
    headerRegular();
  }
})

function headerWhiteFixed() {
  header.classList.add('header_with-bg');
  header.classList.add('header_fixed');
  for (let menuItem of menuItemS) {
    if (menuItem.classList.contains('main-menu__item_white')) {
      menuItem.classList.remove('main-menu__item_white');
    }
  }
}

function headerRegular() {
  header.classList.remove('header_with-bg');
  header.classList.remove('header_fixed');
  for (let menuItem of menuItemS) {
    if ((menuItem.classList.contains('main-menu__item_white') === false) && (!(currentUrl !== '/'))) {
      menuItem.classList.add('main-menu__item_white');
    }
  }
}

