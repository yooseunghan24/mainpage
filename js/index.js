// 나이
const age = document.querySelector('.age');
const date = new Date();
age.textContent = date.getFullYear() - 1996 + 1;

// 로딩 됐을 때 인트로 효과
const iam = document.querySelector('.iam');
window.addEventListener('load', () => {
  iam.classList.add('active');
})

// wheel 이벤트
const wrap = document.querySelector('.moving-wrap');
const article = document.querySelectorAll('article');
let wheelIndex = 0;
let wheelFnc;

function wheelUp() {
  wheelIndex === 0 ? wheelIndex = 0 : wheelIndex -= 1;
  wrap.style.marginTop = `${-100*wheelIndex}vh`;
}
function wheelDown() {
  wheelIndex === article.length-1
  ? wheelIndex = article.length-1
  : wheelIndex += 1;
  wrap.style.marginTop = `${-100*wheelIndex}vh`;
}

window.addEventListener('wheel', (e) => {
  let delta = e.deltaY;
  clearTimeout(wheelFnc);
  wheelFnc = setTimeout(() => {
    delta > 0 ? wheelDown() : wheelUp();
  }, 100)
})

// 터치 스크롤 이벤트
let startY=0;
let moveY=0;
let distance = 0;
let isTouched = false;
window.addEventListener('touchstart', (e) => {
  isTouched = true;
  startY = e.touches[0].clientY;
});
window.addEventListener('touchend', () => (isTouched = false));
window.addEventListener('touchmove', (e) => {
  if(!isTouched) return;
  moveY = e.touches[0].clientY;
  distance = startY - moveY;
  clearTimeout(wheelFnc);
  wheelFnc = setTimeout(() => {
    distance > 0 ? wheelDown() : wheelUp();
  }, 100)
});

// 메뉴 클릭 이벤트
const navList = document.querySelectorAll('nav ul li');
navList.forEach((ele, idx) => {
  ele.addEventListener('click', () => {
    wheelIndex = idx+1;
    wrap.style.marginTop = `${-100*(idx+1)}vh`;
  })
})

// 스크롤버튼 클릭 이벤트
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
upBtn.addEventListener('click', wheelUp);
downBtn.addEventListener('click', wheelDown);

// works 영역 슬라이드
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slide = document.querySelector('.slide-ul');
const slideList = document.querySelectorAll('.slide-ul li');
const slideInfo = document.querySelectorAll('.slide-info');
const viewSite = document.querySelectorAll('.slide-info a');
let slideIndex = 0;

function prevFnc() {
  slideIndex === 0 ? slideIndex = slideList.length-1 : slideIndex -= 1;
  for(let i=0; i<slideList.length; i++) {
    slideList[i].classList.remove('active');
    slideInfo[i].classList.remove('active');
    viewSite[i].classList.remove('active');
  }
  slideList[slideIndex].classList.add('active');
  slideInfo[slideIndex].classList.add('active');
  viewSite[slideIndex].classList.add('active');
  slide.style.marginLeft = `${(-slideList[0].clientWidth)*slideIndex}px`;
}
function nextFnc() {
  slideIndex === slideList.length-1 ? slideIndex = 0 : slideIndex += 1;
  for(let i=0; i<slideList.length; i++) {
    slideList[i].classList.remove('active');
    slideInfo[i].classList.remove('active');
    viewSite[i].classList.remove('active');
  }
  slideList[slideIndex].classList.add('active');
  slideInfo[slideIndex].classList.add('active');
  viewSite[slideIndex].classList.add('active');
  slide.style.marginLeft = `${(-slideList[0].clientWidth)*slideIndex}px`;
}

prevBtn.addEventListener('click', prevFnc);
nextBtn.addEventListener('click', nextFnc);