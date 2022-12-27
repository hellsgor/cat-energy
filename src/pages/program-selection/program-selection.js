'use strict';

import 'Components/common/header/header.js';
import 'Components/common/footer-big/footer-big.js';
import 'UIKit/input/input.js';
import 'UIKit/radio/radio.js';
import 'Components/modal-window/modal-window.js';
import 'Utils/form-send.js';
import {
  addModalWindowContent,
  showModalWindow,
} from 'Components/modal-window/modal-window.js';
import {sendForm} from 'Utils/form-send.js';

document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('program-selection-button');
  const programSelectionForm = document.getElementById(
    'program-selection-form'
  );
  submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    sendForm(programSelectionForm)
      .then((status) => {
        let symbol;
        let event;
        if (status >= 200 || status <= 299) {
          symbol = 'success';
          event = 'application sent';
        } else {
          symbol = 'error';
          event = 'application not sent';
        }
        return [symbol, event];
      })
      .then((result) => {
        addModalWindowContent(result[0], result[1]);
        showModalWindow();
      });
  });
});

