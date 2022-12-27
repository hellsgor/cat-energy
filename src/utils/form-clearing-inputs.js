export function clearingRadio(parent, input) {
  input.checked = false;
  if (parent.classList.contains('radio_valid')) {
    parent.classList.remove('radio_valid')
  } else if (parent.classList.contains('radio_error')) {
    (parent.classList.remove('radio_valid'));
  }
}

export function clearingCheckbox(input) {
  input.checked = false;
}

export function clearingInput(input) {
  input.value = '';
  if (input.style.backgroundColor !== '#ffffff') {
    input.style.backgroundColor = '#ffffff';
  }
}
