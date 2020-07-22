const wheelWrap = document.querySelector('#wrap > div');
const footer = document.querySelector('footer');
const toTop = document.querySelector('.top');
const textAni = document.querySelectorAll('.text');
const logo = document.querySelector('header > h1 > a');
const menuBtn = document.querySelector('.menu_btn');
const menuBtnLine = document.querySelectorAll('.menu_btn span');
const menuBox = document.querySelector('.menu_box');
const headerSvg = document.querySelector('.svg_icon');
const sideMenu = document.querySelector('.side_btn');
const sideBtnList = document.querySelectorAll('.side_btn li');
const sideBtn = document.querySelectorAll('.side_btn li a');
const scrollBtn = document.querySelector('.scroll_btn');
const scrollBtnLine = document.querySelector('.scroll_btn div');
const scrollBtnText = document.querySelector('.scroll_btn span');
let index = 0;
let wheelAni;
/* 함수 모음 */

// 스크롤 버튼 함수
function scrollBtnFnc() {
  if(index <= 5) {
    scrollBtn.style.display = 'block';
    scrollBtn.classList.remove('active');
    setTimeout(() => {
      scrollBtn.classList.add('active');
    }, 700)
    if(index ===5) {
      scrollBtnText.style.color = '#000';
      scrollBtnLine.style.backgroundColor = '#000';
    } else {
      scrollBtnText.style.color = '#fff';
      scrollBtnLine.style.backgroundColor = '#fff';
    }
  } else {
    scrollBtn.style.display = 'none';
  }
  for(let i of sideBtn) {
    i.classList.remove('active');
  }
  sideBtn[index].classList.add('active');
}

// 텍스트 올라오는 함수
function textAniFnc() {
  if(index <= 5) textAni[index].classList.add('active');
}

// 흰색 <-> 검정색 변경 함수
function colorChange() {
  if(index >= 5) {
    sideMenu.classList.add('active');
    headerSvg.classList.add('active');
    menuBtn.classList.add('active');
    logo.style.backgroundImage = 'url(img/logo_gray.png)'; 
  } else {
    sideMenu.classList.remove('active');
    headerSvg.classList.remove('active');
    menuBtn.classList.remove('active');
    logo.style.backgroundImage = 'url(img/logo_white.png)';
  }
}

// 휠 함수
function wheelFnc(e) {
  let delta = e.deltaY;
  clearTimeout(wheelAni);
  wheelAni = setTimeout(() => {
    if (delta > 0) {
      // 휠 내릴때
      if (index < 8) {
        index += 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      } else {
        if (index === 9) return;
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) - (footer.clientHeight) + 'px';
        index = 9;
      }
      for(let i of sideBtn) {
        i.classList.remove('active');
      }
      sideBtn[index].classList.add('active');
    } else {
      // 휠 올릴때
      if (index === 9) {
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) + (footer.clientHeight) + 'px';
        index -= 1;
      } else {
        if (index === 0) return;
        index -= 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      }
      for(let i of sideBtn) {
        i.classList.remove('active');
      }
      sideBtn[index].classList.add('active');
    }
    textAniFnc();
    scrollBtnFnc();
    colorChange();
    meritFnc();
  }, 100)
}

// 메리트영역 숫자 증가하는 함수
const meritNumber = document.querySelectorAll('.merit_list > li > p span');
let yearNum = 0;
let people = 0;
let again = 0;
let long = 0;
function meritFnc() {
  if(index === 7) {
    let goNumber = setTimeout(function tick() {
      yearNum >= 2003 ? yearNum = 2003 : yearNum += 40;
      meritNumber[0].textContent = yearNum;
      people >= 16412 ? people = 16412 : people += 320;
      meritNumber[1].textContent = people;
      again >= 94 ? again = 94 : again += 2;
      meritNumber[2].textContent = again;
      long >= 48 ? long = 48 : long += 1;
      meritNumber[3].textContent = long;
      goNumber = setTimeout(tick, 30);
    }, 30)
  }
}

/* 이벤트 */

// Scroll Down 버튼 클릭 이벤트
scrollBtn.addEventListener('click', () => {
  index += 1;
  textAniFnc();
  scrollBtnFnc();
  colorChange();
  wheelWrap.style.marginTop = `${-innerHeight * index}px`;
})

// href 속성이 #인 태그 상단이동 방지
const preventA = document.querySelectorAll('[href="#"]');
for(let i of preventA) {
  i.addEventListener('click', (e) => {
    e.preventDefault();
  })
}

// 로드될 때 이벤트
window.addEventListener('load',() => {
  textAni[0].classList.add('active');
  scrollBtn.classList.add('active');
});

// 위로 가기 버튼 이벤트
toTop.addEventListener('click', () => {
  wheelWrap.style.marginTop = 0;
  index =0;
  for(let i of sideBtn) {
    i.classList.remove('active');
  }
  sideBtn[index].classList.add('active');
  scrollBtn.style.display = 'block';
  scrollBtnLine.style.background = '#fff';
  scrollBtnText.style.color = '#fff';
  colorChange();
})

// 메뉴 버튼 이벤트
let menuSw = 0;
menuBtn.addEventListener('click', () => {
  if(index >= 5) {
    // 헤더 어두울 때
    if(menuSw === 0) {
      menuBox.classList.add('active');
      headerSvg.classList.add('active');
      menuBtn.classList.add('active');
      for(let i of menuBtnLine) {
        i.classList.add('active');
      }
      logo.style.backgroundImage = 'url(img/logo_gray.png)';
      menuSw = 1;
    } else {
      menuBox.classList.remove('active');
      for(let i of menuBtnLine) {
        i.classList.remove('active');
      }
      menuSw = 0;
    }
  } else {
    // 헤더 밝을 때
    if(menuSw === 0) {
      menuBox.classList.add('active');
      headerSvg.classList.add('active');
      menuBtn.classList.add('active');
      for(let i of menuBtnLine) {
        i.classList.add('active');
      }
      logo.style.backgroundImage = 'url(img/logo_gray.png)';
      menuSw = 1;
    } else {
      menuBox.classList.remove('active');
      headerSvg.classList.remove('active');
      menuBtn.classList.remove('active');
      for(let i of menuBtnLine) {
        i.classList.remove('active');
      }
      logo.style.backgroundImage = 'url(img/logo_white.png)';
      menuSw = 0;
    }
  }
})

// 휠 이벤트
window.addEventListener('wheel', wheelFnc);

// 사이드 버튼 이벤트
sideBtn.forEach((ele, idx) => {
  ele.addEventListener('click', function() {
    if(idx <= 8) {
      wheelWrap.style.marginTop = `${-innerHeight * idx}px`
    } else {
      if(index === 9) return;
      wheelWrap.style.marginTop = `${-innerHeight * 8 - footer.clientHeight}px`
    }
    index = idx;
    for(let i of sideBtn) {
      i.classList.remove('active');
    }
    sideBtn[index].classList.add('active');
    textAniFnc();
    scrollBtnFnc();
    colorChange();
    meritFnc();
  })
})

// section09 슬라이드
const mediaSlide = document.querySelector('.media_slide > ul');
const noticeSlide = document.querySelector('.notice_slide > ul');
const mediaLeft = document.querySelector('.media .left_btn');
const mediaRight = document.querySelector('.media .right_btn');
const noticeLeft = document.querySelector('.notice .left_btn');
const noticeRight = document.querySelector('.notice .right_btn');
let mediaIdx = 0;
let noticeIdx = 0;
mediaLeft.addEventListener('click', () => {
  mediaIdx === 0 ? mediaIdx = 0 : mediaIdx -= 1;
  mediaSlide.style.marginLeft = `${-100 * mediaIdx}%`;
});
mediaRight.addEventListener('click', () => {
  mediaIdx === 2 ? mediaIdx = 2 : mediaIdx += 1;
  mediaSlide.style.marginLeft = `${-100 * mediaIdx}%`;
});
noticeLeft.addEventListener('click', () => {
  noticeIdx === 0 ? noticeIdx = 0 : noticeIdx -= 1;
  noticeSlide.style.marginLeft = `${-100 * noticeIdx}%`;
});
noticeRight.addEventListener('click', () => {
  noticeIdx === 1 ? noticeIdx = 1 : noticeIdx += 1;
  noticeSlide.style.marginLeft = `${-100 * noticeIdx}%`;
});

/* 터치 이벤트 */
let isClicked = false;
let start = 0;
let move = 0;
let distance = 0;
let touchAni;
window.addEventListener('touchstart', (e) => {
  isClicked = true;
  start = e.touches[0].clientY;
})
window.addEventListener('touchend', (e) => {
  isClicked = false;
})
window.addEventListener('touchmove', (e) => {
  if(!isClicked) return;
  move = e.touches[0].clientY;
  distance = start - move;
  clearTimeout(touchAni);
  touchAni = setTimeout(() => {
    if(distance > 0) {
      if (index < 8) {
        index += 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      } else {
        if (index === 9) return;
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) - (footer.clientHeight) + 'px';
        index = 9;
      }
      for(let i of sideBtn) {
        i.classList.remove('active');
      }
      sideBtn[index].classList.add('active');
    } else {
      if (index === 9) {
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) + (footer.clientHeight) + 'px';
        index -= 1;
      } else {
        if (index === 0) return;
        index -= 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      }
      for(let i of sideBtn) {
        i.classList.remove('active');
      }
      sideBtn[index].classList.add('active');
    }
    textAniFnc();
    scrollBtnFnc();
    colorChange();
    meritFnc();
  }, 100)
})