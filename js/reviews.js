new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".reviews-btn-next",
    prevEl: ".reviews-btn-prev",
  },

  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    740: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
