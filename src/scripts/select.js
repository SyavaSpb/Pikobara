document.querySelectorAll('.select').forEach((select) => {
  const selectButton = select.querySelector('.select__button')
  selectButton.onclick = function() {
    if (select.classList.contains('select__active')) {
      select.classList.remove('select__active')
    } else {
      document.querySelectorAll('.select').forEach((select) => {
        if (select.classList.contains('select__active')) {
          select.classList.remove('select__active')
        }
      })
      select.classList.add('select__active')
    }
  }
  select.querySelectorAll('li').forEach((li, i) => {
    li.onclick = function() {
      select.querySelector('.text__input').value = this.querySelector('.select__value').textContent
      selectButton.querySelector('.selected__flag').src = this.querySelector('img').src
      select.classList.remove('select__active')
    }
  })
})
