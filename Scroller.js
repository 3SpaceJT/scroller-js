class Scroller {
  constructor(mainElement) {
    const rootElement = document.querySelector(mainElement);
    this.sections = [...document.querySelectorAll('[data-section]')]
    this.currentSectionIndex = 0
    this.isThrottled = false
  }
  listenScroll = (e) => {
    if (this.isThrottled) return
    this.isThrottled = true
    setTimeout(() => this.isThrottled = false, 1000)
    const direction = e.wheelDelta > 0 ? -1 : 1;
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
    this.sections[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}