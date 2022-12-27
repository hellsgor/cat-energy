'use strict'

import {getInputNumbersValue} from 'Utils/get-input-numbers-value.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputNumbers = document.querySelectorAll('input[type=number]');

  inputNumbers.forEach(inputNumber => {
    inputNumber.addEventListener('input', () => {
      inputNumber.value = getInputNumbersValue(inputNumber);
    })
    const upBtn = inputNumber.parentNode.querySelector('.input__number-button_up');
    const downBtn = inputNumber.parentNode.querySelector('.input__number-button_down');
    upBtn.addEventListener('click', () => {
      inputNumberValueUp(inputNumber);
    })
    downBtn.addEventListener('click', () => {
      inputNumberValueDown(inputNumber);
    })
  })
})

function inputNumberValueUp(input) {
  if (input.value) {
    return input.value = Number(input.value) + 1;
  } else {
    return input.value = 1;
  }
}

function inputNumberValueDown(input) {
  if (input.value <= 0.5) {
    return input.value = '';
  } else {
    return input.value = Number(input.value) - 1;
  }
}


