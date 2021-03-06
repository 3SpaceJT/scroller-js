class Scroller {
  constructor(mainElement) {
    const rootElement = document.querySelector(mainElement);
    this.sections = [...document.querySelectorAll('[data-section]')]
    this.currentSectionIndex = this.sections.findIndex(this.isScrolledInToView)
    this.isThrottled = false

    this.drawNavigation()
  }
  listenScroll = (e) => {
    if (this.isThrottled) return
    this.isThrottled = true
    setTimeout(() => this.isThrottled = false, 1000)
    const direction = e.deltaY < 0 ? -1 : 1;

    this.scroll(direction)
  }

  scroll = (direction) => {
    if (direction === 1) {
      const lastSection = this.currentSectionIndex === this.sections.length - 1;
      if (lastSection) return
    } else if (direction === -1) {
      const firstSection = this.currentSectionIndex === 0;
      if (firstSection) return
    }
    this.currentSectionIndex = this.currentSectionIndex + direction;

    this.scrollToCurrentSection(this.currentSectionIndex)
  }

  scrollToCurrentSection = (index) => {
    this.isActiveDot()
    this.sections[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  isScrolledInToView = (item) => {
    const rect = item.getBoundingClientRect();
    const itemTop = rect.top;
    const itemBottom = Math.floor(rect.bottom);
    const isVisible = (itemTop >= 0) && (itemBottom <= window.innerHeight)
    return isVisible;
  }

  drawNavigation = () => {
    this.navigationContainer = document.createElement('aside')
    this.navigationContainer.setAttribute('class', 'aside-navigation')
    const ListItems = document.createElement('ul')
    ListItems.setAttribute('class', 'aside-navigation__list-items')
    this.sections.forEach((section, index) => {
      const item = document.createElement('li')
      item.setAttribute('class', 'aside-navigation__item')
      item.addEventListener('click', () => {
        this.currentSectionIndex = index;
        this.scrollToCurrentSection(this.currentSectionIndex);
      })
      ListItems.appendChild(item)
    })
    this.navigationContainer.appendChild(ListItems)
    document.body.appendChild(this.navigationContainer)
    this.isActiveDot()
  }

  isActiveDot = () => {
    this.navigationItems = this.navigationContainer.querySelectorAll('li');
    this.navigationItems.forEach((item, index) => {
      if (this.currentSectionIndex === index) {
        item.classList.add('aside-navigation__item--active')
      } else {
        item.classList.remove('aside-navigation__item--active')
      }
    })
  }
}