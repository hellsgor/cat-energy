'use strict'

import 'Components/blackout/blackout.js';
import messages from 'JSON/modals-messages.json'
import {closeModalWindow} from 'Utils/close-modal-window.js';
import { modalWindow } from "Utils/variables";
import successIcon from 'Icons/done.pug';
import errorIcon from 'Icons/warning.pug';

const body = document.querySelector('body');
const closeBtn = modalWindow.querySelector('.modal-window__close-btn');


export function addModalWindowContent(symbolValue, eventValue) {
  const modalWindowIcon = modalWindow.querySelector('.modal-window__icon');
  const modalWindowTitle = modalWindow.querySelector('.modal-window__title');
  const modalWindowText = modalWindow.querySelector('.modal-window__text');

  for (let i = 0; i < messages.length; i++) {
    if (messages[i]['symbol'] === symbolValue && messages[i]['event'] === eventValue) {
      modalWindowTitle.innerText = messages[i]['title'];
      modalWindowText.innerText = messages[i]['text'];
      if (symbolValue === 'success') {
        modalWindowIcon.innerHTML = successIcon;
        if (modalWindowTitle.classList.contains('modal-window__title_error')) modalWindowTitle.classList.remove('modal-window__title_error')
      } else {
        modalWindowIcon.innerHTML = errorIcon;
        modalWindowTitle.classList.add('modal-window__title_error');
      }
    }
  }
}

export function showModalWindow() {
  modalWindow.classList.add('modal-window-visible');
  body.classList.add('scroll-prohibited');
}

closeModalWindow(closeBtn, '.modal-window', 'modal-window-visible');
