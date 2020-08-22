class Swiper {
  constructor() {
    this.initialY = null;

    document.addEventListener('touchstart', (e) => this.startTouch(e));
    document.addEventListener('touchmove', (e) => this.moveTouch(e));

    this.events = {
      swipeUp: new Event('swipeUp'),
      swipeDown: new Event('swipeDown'),
    }
  }
  startTouch(e) {
    this.initialY = e.touches[0].clientY;
  }

  moveTouch(e) {
    console.log(this.initialY)
    if (!this.initialY) {
      return
    }
    const currentY = e.touches[0].clientY;
    const deltaY = this.initialY - currentY;
    if (deltaY < 0) {
      document.dispatchEvent(this.events.swipeDown);
    } else {
      document.dispatchEvent(this.events.swipeUp);
    }
    this.initialY = null
  }

}

new Swiper();

