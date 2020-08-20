const rootElement = document.querySelector('[data-root]');
const sections = [...document.querySelectorAll('[data-section]')]

document.addEventListener('mousewheel', (e) => {
  console.log(sections);

})