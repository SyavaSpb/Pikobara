const buttonNav = document.querySelector('.header__menu')
const nav = document.querySelector('.nav')
buttonNav.onclick = function() {
  if (nav.classList.contains('nav__active')) {
    nav.classList.remove('nav__active')
  } else {
    nav.classList.add('nav__active')
  }
}
function resizeNav() {
  if (document.documentElement.clientWidth >= 900) {
    if (nav.classList.contains('nav__active')) {
      nav.classList.remove('nav__active')
    }
  }
}
function animOnLoad() {
  if (document.documentElement.clientWidth < 900) {
    for (let item of nav.children) {
      if (item.classList.contains('nav__link__anim')) {
        item.classList.remove('nav__link__anim')
      }
    }
  }
}
for (let item of nav.children) {
  item.onanimationend = function() {
    if (this.classList.contains('nav__link__anim')) {
      this.classList.remove('nav__link__anim')
    }
  }
}
