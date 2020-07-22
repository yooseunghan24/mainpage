const videoWrap = document.querySelector(".video_wrap");
const skip = document.querySelector(".skip");
const main = document.querySelector("main");
const slideWrap = document.querySelector(".slide_wrap");
const slide = document.querySelectorAll(".slide");
const slideWrapImg = document.querySelectorAll(".content_img img");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const slideContent = document.querySelectorAll(".slide_content");
const currentPage = document.querySelector(".current_page");
setTimeout(() => {
  videoWrap.style.display = "none";
}, 11000);
skip.addEventListener("click", () => {
  videoWrap.style.opacity = 0;
  setTimeout(function () {
    videoWrap.style.display = "none";
  }, 200);
});
var swiper = new Swiper('.swiper-container', {
  speed: 800,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    invert: false,
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    1301: {
      spaceBetween: 140,
    }
  }
});