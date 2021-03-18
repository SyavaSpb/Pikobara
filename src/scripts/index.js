@@include('../style/style.js')
@@include('./scrolling.js')
@@include('./capabilities.js')
@@include('./header.js')
@@include('./modal.js')

window.onresize = function() {
  resizeNav()
}

window.onload = function() {
  scrollingOnload()
  animOnLoad()
}
