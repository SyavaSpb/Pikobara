let isAnimated = false
let scrollY

window.onload = function() {
  if (window.location.hash == '') {
    setTimeout(() => {
       window.location = `#${document.anchors[0].name}`
       scrollY = 0
       window.scrollTo(0, scrollY)
    }, 10)
  } else {
    setTimeout(() => {
       updSLider(parseInt(window.location.hash.substring(1)) - 1)
    }, 10)
  }
}

function updSLider(ind) {
  const slider = document.querySelector('.aside__slider')
  slider.querySelectorAll('div').forEach(item => {
    if (item.classList.contains('slider__item__active')) {
      item.classList.remove('slider__item__active')
    }
  })
  slider.querySelectorAll('div')[ind].classList.add('slider__item__active')
}

function anchorIndByName(anchorName) {
  const anchors = document.anchors
  for (let i = 0; i < anchors.length; i++) {
    if (anchorName == anchors[i].name) {
      return i
    }
  }
}

function linear(dist, time) {
  const k = dist / (time * 1000)
  return function(x) {
    return x * k
  }
}

function ellips(dist, time) {
  time *= 1000
  return function(x) {
    if (x == 0) return 0
    const y = Math.sqrt(1 - ((x - time) * (x - time)) / (time * time)) * dist
    return y
  }
}

function animateScrolling(fun, fps = 60, anchor) {
  const timeForFrame = 1000 / fps

  isAnimated = true

  let t = 0

  const animation = setInterval(() => {
    scrollY += fun(t + timeForFrame) - fun(t)
    window.scrollTo(0, scrollY)
    t += timeForFrame
    if (Math.abs(anchor.getBoundingClientRect().top) < 3) {
      scrollY += anchor.getBoundingClientRect().top
      window.scrollTo(0, scrollY)
      setTimeout(() => {
        isAnimated = false
      }, 200)
      clearInterval(animation)
    }
  }, timeForFrame)
}

window.onscroll = function() {
  if (isAnimated) {
     window.scrollTo(0, scrollY)
     return
  }
  if (!scrollY) {
    scrollY = window.scrollY
    return
  }

  const anchorInd = anchorIndByName(window.location.hash.substring(1))
  const dir = Math.abs(window.scrollY - scrollY) / (window.scrollY - scrollY)
  window.location.hash = `#${document.anchors[anchorInd + dir].name}`
  window.scrollTo(0, scrollY)
  updSLider(anchorInd + dir)
  const anchorParent = document.anchors[anchorInd + dir].parentNode
  animateScrolling(ellips(anchorParent.getBoundingClientRect().top, 1), 60, anchorParent)
}


const slider = document.querySelector('.aside__slider')
  slider.querySelectorAll('div').forEach((item, ind) => {
    item.onclick = function() {
      if (isAnimated) return
      const anchorParent = document.anchors[ind].parentNode
      const top = anchorParent.getBoundingClientRect().top
      window.location.hash = `#${document.anchors[ind].name}`
      window.scrollTo(0, scrollY)
      animateScrolling(ellips(top, 1), 60, anchorParent)
      updSLider(ind)
    }
})















//
