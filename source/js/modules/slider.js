const slider = new Swiper('.slider', {
  // Optional parameters
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,
  speed: 1000,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  watchOverflow: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
});

const sliderWorks = new Swiper('.slider-works', {
  // Optional parameters
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  speed: 1000,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-works__next',
    prevEl: '.slider-works__prev',
  },
});
