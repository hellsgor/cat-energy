'use strict'

const modalWindow = document.querySelector('.modal-add-to-cart');
const body = document.querySelector('body');

export function addListenerForOrder(card, buttonContainerClass) {
  card.querySelector(buttonContainerClass).addEventListener('click', (evt) => {
    evt.preventDefault();

    modalWindow.classList.add('modal-window-visible');
    body.classList.add('scroll-prohibited');
  })
}
