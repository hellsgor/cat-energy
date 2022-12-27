'use strict'

import { formInputsValidation } from "Utils/form-validation.js";
import { clearingRadio } from "Utils/form-clearing-inputs.js";
import { clearingCheckbox } from "Utils/form-clearing-inputs.js";
import { clearingInput } from "Utils/form-clearing-inputs.js";
import { addModalWindowContent } from "Components/modal-window/modal-window";
import { showModalWindow } from "Components/modal-window/modal-window";

export async function sendForm(form) {

  const inputs = form.querySelectorAll('input', 'textarea');
  const allInputs = ifTextareas(form, inputs);
  const neededValidationInputs = getNeededValidationInputs(allInputs);
  const url = '/assets/json/server-answer.json';

  clearingErrors(neededValidationInputs);
  if (formInputsValidation(neededValidationInputs) > 0) {
    showErrorModalWindow();
  } else {
    const data = new FormData(form);
    const { status } = await sendData(data, url);
    if (status >= 200 || status <= 299) clearingInputs(allInputs);
    return status;
  }
}

async function sendData(data, url) {
  try {
    let response = await fetch('/assets/json/server-answer.json', {
      method: 'GET',
      // headers: { 'Content-Type': 'multipart/form-data' },
      // body: data,
    })
    if (response.ok) {
      // const result = await response.json();
      return response;
    } else {
      console.log('Ошибка HTTP: ' + response.status)
    }
  }
  catch(e) {
    console.log(e)
  }
}

function getNeededValidationInputs(inputs) {
  let inputsArray = [];
  inputs.forEach((input) => {
    if (input['required']) inputsArray.push(input);
  })
  return inputsArray;
}

function clearingErrors(inputs) {
  inputs.forEach((input) => {
    if (input.classList.contains('input__item_error')) {
      input.classList.remove('input__item_error');
    } else if (input.parentNode.classList.contains('radio_error')) {
      input.parentNode.classList.remove('radio_error');
    }
  })
}

function clearingInputs(inputs) {
  inputs.forEach(input => {
    switch (input.type) {
      case 'radio':
        clearingRadio(input.parentNode, input);
        break
      case 'checkbox':
        clearingCheckbox(input);
        break
      default:
        clearingInput(input)
        break
    }
  })
}

function showErrorModalWindow() {
  addModalWindowContent('error', 'application not sent');
  showModalWindow();
}

function ifTextareas(form, collection) {
  const textareas = form.querySelectorAll('textarea');
  if (textareas.length > 0) {
    let array = Array.from(collection);
    textareas.forEach(textarea => {
      array.push(textarea);
    })
    return array;
  }
}
