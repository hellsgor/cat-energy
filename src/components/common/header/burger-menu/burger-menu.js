import { mediaQueryMobile } from 'Utils/variables.js';
import { mainMenu } from 'Utils/variables.js';
import { burgerMenu } from 'Utils/variables.js';
import { burgerMenuOpenButton } from 'Utils/variables.js';
import { burgerMenuCloseButton } from 'Utils/variables.js';

if (mediaQueryMobile.matches) {
  burgerMenu.insertAdjacentElement('afterbegin', mainMenu);
}

burgerMenuOpenButton.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_visible');
})

burgerMenuCloseButton.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_visible');
})
