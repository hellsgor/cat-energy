'use strict'

const minTextValueLength = 3;
const minNumberValueLength = 1;
let groups = [];
const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
const validTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export function formInputsValidation(inputs) {

  let isErrors = 0;
  inputs.forEach(input => {

    if (input.type === 'text') {
      let result = isEmpty(input, minTextValueLength);
      isErrors += result;
    } else if (input.type === 'number') {
      let result = isEmpty(input, minNumberValueLength);
      isErrors += result;
    } else if (input.parentNode.classList.contains('radio-group')) {
      if(!groups.includes(input.parentNode)) {
        groups.push(input.parentNode);
        let result = radioValidation(input.parentNode);
        isErrors += result;
      }
    } else if (input.type === 'email' || input.type === 'tel') {
      let result = isDataValid(input);
      isErrors += result;
    }
  })
  return isErrors;
}

function isEmpty(input, minLength) {
  if (input.value.length < minLength) {
    input.classList.add('input__item_error');
    return 1;
  }
  if (input.classList.contains('input__item_error')) input.classList.remove('input__item_error');
  return 0;
}

function radioValidation(parent) {
  let radioButtons = parent.querySelectorAll('input[type=radio]');
  let flag = false;
  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      flag = true;
    }
  })
  if (flag === false) {
    parent.classList.add('radio_error');
    return 1;
  } else return 0;
}

function isDataValid(input) {
  if (validEmail.test(input.value)  || validTel.test(input.value)) {
    return 0;
  } else {
    input.classList.add('input__item_error');
    return 1;
  }
}


