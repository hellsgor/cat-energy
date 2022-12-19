'use strict'

import './main-menu/main-manu.js';
import './burger-menu/burger-menu.js';

import {mediaQueryTablet} from 'Utils/variables.js';
import {currentUrl} from 'Utils/variables.js'
import {adjustingHeaderScrollY} from 'Utils/variables.js';
import {header} from 'Utils/variables.js';
import {menuItemS} from 'Utils/variables.js';
import {highlightActiveMenuItem} from './main-menu/main-manu.js';
import {isMainPage} from "Utils/is-main-page";
import {isTablet} from "Utils/is-tablet";


let lastScroll = 0;
let currentScroll = 0;


// прозрачный хедер на главной странице выше adjustingHeaderScrollY
if (isMainPage() && currentScroll < adjustingHeaderScrollY && !(isTablet())) {
  headerTransparent();
  highlightActiveMenuItem();
}


window.addEventListener('scroll', () => {
  currentScroll = window.pageYOffset || document.body.scrollTop;

  if (!(isTablet()) && isMainPage()) {
    if (currentScroll > adjustingHeaderScrollY + 180) {
      for (let menuItem of menuItemS) {
        menuItem.classList.remove('main-menu__item_white');
      }
      headerWhite();
      highlightActiveMenuItem();
    } else {
      for (let menuItem of menuItemS) {
        menuItem.classList.add('main-menu__item_white');
      }
      headerTransparent();
      highlightActiveMenuItem();
    }
  }


  if (currentScroll > lastScroll && currentScroll > adjustingHeaderScrollY) {
    headerHidden();
  } else {
    headerVisible();
  }
  lastScroll = currentScroll;

})


function headerHidden() {
  header.classList.add('header_hidden');
}

function headerVisible() {
  header.classList.remove('header_hidden');
}

function headerWhite() {
  header.classList.remove('header_transparent');
}

function headerTransparent() {
  header.classList.add('header_transparent');
}
