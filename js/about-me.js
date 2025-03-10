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

  on: {
    slideChangeTransitionEnd: function () {
      document.querySelectorAll(".about-skills-txt").forEach((e) => {
        e.classList.remove("ellips-red");
      });

      const visibleSlides = document.querySelectorAll(".swiper-slide");
      const firstVisibleSlide = Array.from(visibleSlides).find((slide) => {
        return slide.getBoundingClientRect().left >= 0;
      });

      if (firstVisibleSlide) {
        const firstTextElement =
          firstVisibleSlide.querySelector(".about-skills-txt");
        if (firstTextElement) {
          firstTextElement.classList.add("ellips-red");
        }
      }
    },
  },
});
