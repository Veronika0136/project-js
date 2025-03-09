new Swiper(".swiper", {
    slidesPerView: 6,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".about-skills-btn",
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
        slidesPerView: 2,
      },
      740: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });