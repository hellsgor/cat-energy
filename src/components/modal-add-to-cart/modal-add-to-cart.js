'use strict'

import 'Components/blackout/blackout.js';

import {closeModalWindow} from 'Utils/close-modal-window.js';

const closeBtn = document.querySelector('.modal-add-to-cart__close-btn');

closeModalWindow(closeBtn, '.modal-add-to-cart', 'modal-window-visible');
