'use strict'

export function closeModalWindow(closeBtn, modalWindowClass, removedClass) {
  let modalWindow = document.querySelector(modalWindowClass);
  closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove(removedClass);
    document.querySelector('body').classList.remove('scroll-prohibited');
  })
}
