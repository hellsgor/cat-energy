'use strict'

const blackouts = document.querySelectorAll('.blackout');

for (let blackout of blackouts) {
  blackout.addEventListener('click', () => {
    blackout.parentElement.classList.remove('modal-window-visible');
    document.querySelector('body').classList.remove('scroll-prohibited');
  })
}
