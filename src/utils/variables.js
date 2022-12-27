// Adaptability
export const mediaQueryTablet = window.matchMedia('(max-width: 1025px)');
export const mediaQueryMobile = window.matchMedia('(max-width: 540px)');

// Header
export const header = document.querySelector('.header');
export const adjustingHeaderScrollY = 100; //не менее 150 иначе виден переход

// Main menu
export const mainMenu = document.querySelector('.header .main-menu');
export const menuItemS = document.querySelectorAll('.header .main-menu__item');

//Burger-menu
export const burgerMenu = document.querySelector('.burger-menu');
export const burgerMenuCloseButton = document.querySelector('.burger-menu__close-btn');
export const burgerMenuOpenButton = document.querySelector('.header__burger-btn');

// URL & Header colors
export const currentUrl = window.location.pathname;

// Modal window
export const modalWindow = document.querySelector('.modal-window');
