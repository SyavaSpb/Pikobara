let isAnimated = true
let myScrollY = 0

function scrollingOnload() {
  if (window.location.hash == '') {
    setTimeout(() => {
       window.location = `#${document.anchors[0].name}`
       myScrollY = 0
       window.scrollTo(0, myScrollY)
       isAnimated = false
    }, 50)
  } else {
    setTimeout(() => {
       // updSLider(parseInt(window.location.hash.substring(1)) - 1)
       const name = window.location.hash.substring(1)
       const ind = anchorIndByName(name)
       const anchorParent = document.anchors[0].parentNode
       myScrollY = anchorParent.getBoundingClientRect().height * ind
       updSLider(ind)
       // window.scrollTo(0, myScrollY)
       isAnimated = false
    }, 50)
  }
}

function updSLider(ind) {
  const scrollbar = document.querySelector('.scrollbar')
  scrollbar.querySelectorAll('.scrollbar__item').forEach(item => {
    if (item.classList.contains('scrollbar__item-active')) {
      item.classList.remove('scrollbar__item-active')
    }
  })
  scrollbar.querySelectorAll('.scrollbar__item')[ind].classList.add('scrollbar__item-active')
}

function anchorIndByName(anchorName) {
  const anchors = document.anchors
  for (let i = 0; i < anchors.length; i++) {
    if (anchorName == anchors[i].name) {
      return i
    }
  }
}

function animateScrolling(fun, fps = 60, anchor) {
  const timeForFrame = 1000 / fps

  isAnimated = true

  let t = 0

  const animation = setInterval(() => {
    myScrollY += fun(t + timeForFrame) - fun(t)
    window.scrollTo(0, myScrollY)
    t += timeForFrame
    if (Math.abs(anchor.getBoundingClientRect().top) < 1) {
      myScrollY += anchor.getBoundingClientRect().top
      window.scrollTo(0, myScrollY)
      isAnimated = false
      clearInterval(animation)
    }
  }, timeForFrame)
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

window.onscroll = function() {
  if (isAnimated) {
    return
  }
  if (myScrollY === undefined) {
    myScrollY = 0
    return
  }
  if (Math.abs(window.scrollY - myScrollY) < 1) {
    return
  }
  if (window.innerWidth < 900) {
    return
  }

  const anchorInd = anchorIndByName(window.location.hash.substring(1))
  const dir = Math.abs(window.scrollY - myScrollY) / (window.scrollY - myScrollY)
  window.location.hash = `#${document.anchors[anchorInd + dir].name}`
  window.scrollTo(0, myScrollY)
  updSLider(anchorInd + dir)
  const anchorParent = document.anchors[anchorInd + dir].parentNode
  animateScrolling(ellips(anchorParent.getBoundingClientRect().top, 1), 60, anchorParent)
}

const scrollbar = document.querySelector('.scrollbar')
  scrollbar.querySelectorAll('.scrollbar__item').forEach((item, ind) => {
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
