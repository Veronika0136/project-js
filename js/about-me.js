new Swiper(".about-skills-swiper", {
    slidesPerView: 6,
    slidesPerGroup: 1,
   
    loop: true,
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
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });