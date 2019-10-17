(function() {
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
})();
