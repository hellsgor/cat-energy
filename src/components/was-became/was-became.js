const wasBecameBlock = document.querySelector('.was-became');
const input = wasBecameBlock.querySelector('input');
const inputButtons = wasBecameBlock.querySelectorAll('.range__button');
const imgWas = wasBecameBlock.querySelector('.was-became__was');
const imgBecame = wasBecameBlock.querySelector('.was-became__became');
const toggleContainer = wasBecameBlock.querySelector('.toggle');
const toggle = wasBecameBlock.querySelector('.toggle__line');

input.max = imgBecame.clientWidth;
input.value = Math.round(imgBecame.clientWidth / 2);

input.addEventListener('input', (event) => {
  let { target } = event;
  imgWas.style.width = target.value + 'px';
})

for (let inputButton of inputButtons) {
  inputButton.addEventListener('click', () => {

    if (inputButton.classList.contains('range__button_left')) {
      was();
    } else if (inputButton.classList.contains('range__button_right')) {
      became();
    }
  })
}

toggleContainer.addEventListener('click', () => {
  if (toggle.classList.contains('toggle__line_right')) {
    was();
  } else if (toggle.classList.contains('toggle__line_left')) {
    became();
  } else {
    input.value = input.min;
    imgWas.style.width = input.min + 'px';
    toggle.classList.add('toggle__line_left');
  }
})

function was() {
  input.value = input.min;
  imgWas.style.width = input.min + 'px';
  toggle.classList.remove('toggle__line_right');
  toggle.classList.add('toggle__line_left');
}

function became() {
  input.value = input.max;
  imgWas.style.width = input.max +'px';
  toggle.classList.remove('toggle__line_left');
  toggle.classList.add('toggle__line_right');
}


