const scroller = new Scroller('[data-root]')

document.addEventListener('wheel', scroller.listenScroll)
