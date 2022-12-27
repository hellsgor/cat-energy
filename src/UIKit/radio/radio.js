'use strict'

document.addEventListener("DOMContentLoaded", () => {
  const radioGroups = document.querySelectorAll('.radio-group');
  radioGroups.forEach(radioGroup => {
    const radioButtons = radioGroup.querySelectorAll('input');
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', () => checkedRadioGroup(radioButton, radioGroup));
    })
  })
})

function checkedRadioGroup(button, group) {
  if (button.checked && !group.classList.contains('radio_valid')) {
    group.classList.add('radio_valid');
  }
}
