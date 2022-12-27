import {currentUrl} from 'Utils/variables.js';
import { mediaQueryTablet } from 'Utils/variables.js';
import { menuItemS } from 'Utils/variables.js';
import { isMainPage } from 'Utils/is-main-page.js';


addWhiteMenuItems();
highlightActiveMenuItem();

function addWhiteMenuItems() {
  if (!mediaQueryTablet.matches) {
    for (let menuItem of menuItemS) {
      if (isMainPage()) {
        menuItem.classList.add('main-menu__item_white');
      }
    }
  }
}

export function highlightActiveMenuItem() {
  for (let menuItem of menuItemS ) {
    const href = menuItem.href.replace(/^.*?:\/\/.*?(?=\/|$)/, '');
    if (currentUrl === href) {
      if (menuItem.classList.contains('main-menu__item_white')) {
        menuItem.classList.remove('main-menu__item_active-green-border');
        menuItem.classList.add('main-menu__item_active-white-border');
      } else {
        menuItem.classList.remove('main-menu__item_active-white-border');
        menuItem.classList.add('main-menu__item_active-green-border');
      }
    }
  }
}
