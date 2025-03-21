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

// document.addEventListener("DOMContentLoaded", function () {
//   new Accordion(".about-info", {
//     duration: 400, // Скорость анимации (мс)
//     showFirstItem: true, // Первый элемент открыт по умолчанию

//   });
// });

new Accordion(".about-info", {
  duration: 500,
  showMultiple: true,
  openOnInit:[0],
  elementClass:"about-info-item",
  triggerClass:"about-info-btn",
  panelClass:"about-info-content",
  activeClass:"is-active",

});

document.addEventListener("DOMContentLoaded", function() {
  const text = document.querySelector('.text--animated');
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
      const span = text.querySelectorAll('span')[char];
      span.classList.add('fade');
      char++;
      if (char === splitText.length) {
          complete();
          return;
      }
  }

  function complete() {
      clearInterval(timer);
      timer = null;
  }
});