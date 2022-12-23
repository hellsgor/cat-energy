'use strict'

import 'Components/common/header/header.js';
import 'Components/common/footer-big/footer-big.js';
import 'UIKit/input/input.js';
import 'Components/modal-window/modal-window.js'
import {addModalWindowContent} from 'Components/modal-window/modal-window.js';
import {showModalWindow} from 'Components/modal-window/modal-window.js';

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.querySelector('.program-selection__button');
  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    addModalWindowContent('success', 'application sent');
    showModalWindow();
  })
})

