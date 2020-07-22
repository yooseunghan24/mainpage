const subTitle = document.querySelector(".sub_title");
const bgColorChange = document.querySelector(".bg_color_change");
const centerLine = document.querySelectorAll(".center_line");
const whiteCircle = document.querySelectorAll(".story_list > li");
const storyText = document.querySelectorAll(".story_list .text_wrap");
const record = document.querySelector(".record");
const flowerEffect = document.querySelector(".effect");
const number1980 = document.querySelectorAll(".story_1980 .num ul");
const number1988 = document.querySelectorAll(".story_1988 .num ul");
const number1997 = document.querySelectorAll(".story_1997 .num ul");
const number2013 = document.querySelectorAll(".story_2013 .num ul");
const toTop = document.querySelector(".shortcut .top");
const lnbBtn = document.querySelectorAll(".left > ul > li");
const lnbSub = document.querySelectorAll(".left > ul > li > ul");
let sw = 0;
let sw2 = 0;
lnbBtn[0].addEventListener("click", () => {
  if (sw === 0) {
    lnbSub[0].style.display = "block";
    sw = 1;
  } else {
    lnbSub[0].style.display = "none";
    sw = 0;
  }
});
lnbBtn[1].addEventListener("click", () => {
  if (sw2 === 0) {
    lnbSub[1].style.display = "block";
    sw2 = 1;
  } else {
    lnbSub[1].style.display = "none";
    sw2 = 0;
  }
});
function contentsAni() {
  flowerEffect.classList.add("active");
  for (let i = 0; i < centerLine.length; i++) {
    if (scrollY > centerLine[i].getBoundingClientRect().y + scrollY - 1000) {
      centerLine[i].classList.add("active");
    }
    if (scrollY > whiteCircle[i].getBoundingClientRect().y + scrollY - 800) {
      whiteCircle[i].classList.add("active");
    }
    if (scrollY > record.getBoundingClientRect().y + scrollY - 800) {
      record.classList.add("active");
    }
    if (scrollY > storyText[i].getBoundingClientRect().y + scrollY - 800) {
      storyText[i].classList.add("active");
      if (i === 0) {
        for (let i = 0; i < 4; i++) {
          number1980[i].style.marginTop = 832 + "px";
        }
      } else if (i === 1) {
        for (let i = 0; i < 4; i++) {
          number1988[i].style.marginTop = 832 + "px";
        }
      } else if (i === 2) {
        for (let i = 0; i < 4; i++) {
          number1997[i].style.marginTop = 832 + "px";
        }
      } else if (i === 3) {
        for (let i = 0; i < 4; i++) {
          number2013[i].style.marginTop = 832 + "px";
        }
      }
    }
  }
}
function bgOpacity(delta) {
  if (delta > 0) {
    if (scrollY > 450) {
      bgColorChange.style.opacity = ".8";
    } else if (scrollY > 300) {
      bgColorChange.style.opacity = ".6";
    } else if (scrollY > 150) {
      bgColorChange.style.opacity = ".4";
    } else if (scrollY > 0) {
      bgColorChange.style.opacity = ".2";
    }
  } else {
    if (scrollY < 150) {
      bgColorChange.style.opacity = "0";
    } else if (scrollY < 300) {
      bgColorChange.style.opacity = ".2";
    } else if (scrollY < 450) {
      bgColorChange.style.opacity = ".4";
    } else if (scrollY < 600) {
      bgColorChange.style.opacity = ".6";
    }
  }
}
window.addEventListener("wheel", (e) => {
  let delta = e.deltaY;
  contentsAni();
  bgOpacity(delta);
});
toTop.addEventListener("click", () => (bgColorChange.style.opacity = "0"));
