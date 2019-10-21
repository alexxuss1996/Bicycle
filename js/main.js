window.onload = function() {
  // glide.js slider
  /**
   * @see https://glidejs.com/docs
   */

  const carousel = new Glide(".glide", {
    autoplay: 3000,
    rewindDuration: 1000,
    animationDuration: 1200,
    hoverPause: true,
    perView: 1
  });
  carousel.mount();

  // Scroll navigation to id

  const navbar = document.querySelector(".nav");
  let links = document.querySelectorAll(".nav a, a.home-link");
  const positionOnTop = navbar.offsetTop + navbar.offsetHeight;
  links.forEach(elem => elem.addEventListener("click", navLinkClick));

  window.addEventListener(
    "scroll",
    () => {
      if (this.pageYOffset >= positionOnTop) {
        navbar.classList.add("animate-opacity");
      } else {
        navbar.classList.remove("animate-opacity");
      }
    },
    false
  );

  function smoothScroll(event) {
    event.preventDefault();
    const targetId =
      event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const offset = -145; // scroll offset in px
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      window.scrollTo(0, easeOutQuint(progress, startPosition, distance, duration) + offset);

      if (progress < duration) window.requestAnimationFrame(step);
    }
  }

  function navLinkClick(event) {
    smoothScroll(event);
  }
  // Easing function

  function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
  }
};
