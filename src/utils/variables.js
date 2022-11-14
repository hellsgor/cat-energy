// Adaptability
export const mediaQueryTablet = window.matchMedia('(max-width: 1440px)');
export const mediaQueryMobile = window.matchMedia('(max-width: 540px)');

// Header & Main menu
export const header = document.querySelector('.header');
export const adjustingHeaderScrollY = 150; //не менее 150 (виден переход)
export const menuItemS = document.querySelectorAll('.header .main-menu__item');
export const scrollMinMaxRange = 40;

// URL & Header colors
export const currentUrl = window.location.pathname;
