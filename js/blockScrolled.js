//================ The logic for the appearance of a modal window ================//

// Disable scroll on the page
const disableScroll = () => {
  /* dataset is data attribute.
  dataset must remember his current position.
  To do this, set a property window.scrollY to it.*/
  document.body.dataset.scrollY = window.scrollY;

  // To smoothly hide the scroll bar
  // window.innerWidth - this is the width of the browser window
  // document.body.offsetWidth - This is the page body width.
  const scrollWidth = window.innerWidth - document.body.offsetWidth;

  // Several styles for owerflow = "hidden"
  document.body.style.cssText = `
  position: fixed;
  top: -${window.scrollY}px;
  left: 0;
  width: 100%;
  owerflow: hidden;
  height: 100vh;
  padding-right: ${scrollWidth}px;
  `;
};

// Enable scroll on the page
const enableScroll = () => {
  // Cleaning up styles for owerflow = "hidden"
  document.body.style.cssText = '';
  // Momental back scroll, when owerflow = "auto" again
  window.scroll({
    top: document.body.dataset.scrollY
  })
};

export default { disableScroll, enableScroll };
