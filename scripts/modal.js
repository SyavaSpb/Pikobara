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

function changeScreen() {
  const w = document.documentElement.clientWidth
  const h = document.documentElement.clientHeight
  const modalInner = modal.querySelector('.modal__inner')
  if (1.42*w < h) {
    if (!modalInner.classList.contains('modal__vertical')) {
      modalInner.classList.add('modal__vertical')
    }
  } else {
    if (modalInner.classList.contains('modal__vertical')) {
      modalInner.classList.remove('modal__vertical')
    }
  }
}

window.onload = changeScreen

window.onresize = changeScreen
