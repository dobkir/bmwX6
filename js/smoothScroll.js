//================ The Final variant that works in the Safari browser ================//

export default function smoothScroll(SPEED = .5) {
  const scrolled = event => {

    const target = event.target;
    if (target.matches('[href^="#"]')) {
      event.preventDefault();
      let start = 0;
      const pageY = window.pageYOffset;
      const hash = target.getAttribute('href');
      if (hash === '#') return;
      const elem = document.querySelector(hash);
      const coordinateElem = elem.getBoundingClientRect().top;
      const step = time => {
        if (!start) start = time;
        const progress = time - start;

        const r = (coordinateElem < 0 ?
          Math.max(pageY - progress / SPEED, pageY + coordinateElem) :
          Math.min(pageY + progress / SPEED, pageY + coordinateElem));

        window.scroll(0, r)
        if (r < pageY + coordinateElem) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  };

  document.body.addEventListener('click', scrolled);
}

//================ The end of the Final variant that works in the Safari browser ================//




//================ The start of the First variant (don't work on Safari) ================//

// The link must contain something other than the hash
// const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
// 
// smoothScrollElems.forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault();

//     const id = link.getAttribute('href').substring(1)
//     document.getElementById(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })

//================ The end of the First variant (don't work on Safari) ================//
