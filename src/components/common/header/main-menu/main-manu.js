import { currentUrl } from 'Utils/variables.js';
import { menuItemS } from 'Utils/variables.js';

for (let menuItem of menuItemS) {
  const active = menuItem.href.replace(/^.*?:\/\/.*?(?=\/|$)/,'');
  if (currentUrl === active) {
    menuItem.classList.add('main-menu__item_active');
  }
  if (currentUrl !== '/') {} else {
    menuItem.classList.add('main-menu__item_white');
  }
}
