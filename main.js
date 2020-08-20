const rootElement = document.querySelector('[data-root]');
const sections = [...document.querySelectorAll('[data-section]')]
let currentSectionIndex = 0

document.addEventListener('mousewheel', (e) => {
  const direction = e.wheelDelta > 0 ? 1 : -1;

  if (direction === 1) {
    const lastSection = currentSectionIndex === sections.length - 1;
    if (lastSection) return
  } else if (direction === -1) {
    const firstSection = currentSectionIndex === 0;
    if (firstSection) return
  }
  currentSectionIndex = currentSectionIndex + direction;
  console.log(currentSectionIndex);

})