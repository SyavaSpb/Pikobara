const modal = document.querySelector('.modal')
function open() {
  modal.classList.add('modal__active')
}
function close() {
  modal.classList.remove('modal__active')
  modal.classList.add('modal__hide')
  modal.ontransitionend = function() {
    modal.classList.remove('modal__hide')
  }
}
document.querySelector('.start__project').onclick = function() {
  open()
}
document.querySelector('.modal').onclick = function() {
  if (event.target.dataset.close) {
    close()
  }
}
