'use strict'
import {addModalWindowContent} from 'Components/modal-window/modal-window.js';
import {showModalWindow} from 'Components/modal-window/modal-window.js';

export function addListenerForOrder(card, buttonContainerClass) {
  card.querySelector(buttonContainerClass).addEventListener('click', (evt) => {
    evt.preventDefault();
    addModalWindowContent('success', 'add order to cart');
    showModalWindow();
  })
}
