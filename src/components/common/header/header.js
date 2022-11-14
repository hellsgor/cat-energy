import './main-menu/main-manu.js';

import {currentUrl} from 'Utils/variables.js';
import {adjustingHeaderScrollY} from 'Utils/variables.js';
import {menuItemS} from 'Utils/variables.js';
import {scrollMinMaxRange} from 'Utils/variables.js';
import {header} from 'Utils/variables.js';

let lastScroll = 0;
let currentScroll = 0;

window.addEventListener('scroll', () => {
  currentScroll = window.pageYOffset || document.body.scrollTop;

  if (currentScroll > lastScroll && currentScroll > adjustingHeaderScrollY) {
    headerHidden();
  } else {
    headerVisible();
  }
  lastScroll = currentScroll;
})

function headerHidden() {
  header.classList.add('header__background_hidden');
  header.classList.add('header_hidden');

}

function headerVisible() {
  header.classList.remove('header__background_hidden');
  header.classList.remove('header_hidden');
}
