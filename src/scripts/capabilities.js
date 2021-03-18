const capabilitiesNavItems = document.querySelectorAll('.capabilities__navItem')
const capabilitieItems = document.querySelectorAll('.capabilitie__item')
capabilitiesNavItems.forEach((item, i) => {
  item.onclick = () => {
    capabilitiesNavItems.forEach(itemj => {
      if (itemj.classList.contains('capabilities__navItem-active')) {
        itemj.classList.remove('capabilities__navItem-active')
      }
    })
    if (!item.classList.contains('capabilities__navItem-active')) {
      item.classList.add('capabilities__navItem-active')
    }

    capabilitieItems.forEach(itemj => {
      if (itemj.classList.contains('capabilitie__item-active')) {
        itemj.classList.remove('capabilitie__item-active')
      }
    })
    if (!capabilitieItems[i].classList.contains('capabilitie__item-active')) {
      capabilitieItems[i].classList.add('capabilitie__item-active')
    }
  }
})
const capabilitieItemNavItems = document.querySelectorAll('.capabilitie__item__navItem')
const capabilitieItemInfTexts = document.querySelectorAll('.capabilitie__item__infText')
capabilitieItemNavItems.forEach((item, i) => {
  item.onclick = () => {
    capabilitieItemNavItems.forEach(itemj => {
      if (itemj.classList.contains('capabilitie__item__navItem-active')) {
        itemj.classList.remove('capabilitie__item__navItem-active')
      }
    })
    if (!item.classList.contains('capabilitie__item__navItem-active')) {
      item.classList.add('capabilitie__item__navItem-active')
    }

    capabilitieItemInfTexts.forEach(itemj => {
      if (itemj.classList.contains('capabilitie__item__infText-active')) {
        itemj.classList.remove('capabilitie__item__infText-active')
      }
    })
    if (!capabilitieItemInfTexts[i].classList.contains('capabilitie__item__infText-active')) {
      capabilitieItemInfTexts[i].classList.add('capabilitie__item__infText-active')
    }
  }
})
