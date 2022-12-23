'use strict'

import 'Components/blackout/blackout.js';
import messages from 'JSON/modals-messages.json'
import {closeModalWindow} from 'Utils/close-modal-window.js';
import { modalWindow } from "Utils/variables";

const body = document.querySelector('body');
const closeBtn = modalWindow.querySelector('.modal-window__close-btn');


export function addModalWindowContent(symbolValue, eventValue) {
  const modalWindowTitle = modalWindow.querySelector('.modal-window__title');
  const modalWindowText = modalWindow.querySelector('.modal-window__text');

  for (let i = 0; i < messages.length; i++) {
    if (messages[i]['symbol'] === symbolValue && messages[i]['event'] === eventValue) {
      modalWindowTitle.innerText = messages[i]['title'];
      modalWindowText.innerText = messages[i]['text'];
    }
  }
}

export function showModalWindow() {
  modalWindow.classList.add('modal-window-visible');
  body.classList.add('scroll-prohibited');
}


closeModalWindow(closeBtn, '.modal-window', 'modal-window-visible');
