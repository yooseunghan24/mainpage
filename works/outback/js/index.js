/* 메인 자동슬라이드 이벤트 */
let slideIndex = 0;
const slide = document.querySelector('.slide');
const dotsList = document.querySelectorAll('.dots li');
function autoSlide() {
	slideIndex >= 3 ? slideIndex = 0 : slideIndex += 1;
	slide.style.marginLeft = -100*slideIndex + '%';
	for(let i of dotsList) {
		i.classList.remove('dot_on');
	}
	dotsList[slideIndex].classList.add('dot_on');
}
let slideShow = setInterval(autoSlide, 3000);
for(let i=0; i<dotsList.length; i++) {
	dotsList[i].addEventListener('click', function() {
		clearInterval(slideShow);
		for(let i of dotsList) {
			i.classList.remove('dot_on');
		}
		dotsList[i].classList.add('dot_on');
		slide.style.marginLeft = -100*i + '%';
		slideIndex = i;
		slideShow = setInterval(autoSlide, 3000);
	})
}

/* 데스크탑 중간메뉴이미지 슬라이드 */
const menuSlideLi = document.querySelectorAll('.menu_slide li');
const menuLbtn = document.querySelector('.menu_left_btn');
const menuRbtn = document.querySelector('.menu_right_btn');
const menuPage = document.querySelector('.current_page');
let menuNum = 1;
menuLbtn.addEventListener('click', function() {
	menuNum === 1 ? menuNum = menuSlideLi.length : menuNum -= 1;
	menuPage.textContent = menuNum;
	const menuSlideLast = document.querySelector('.menu_slide li:last-child');
	menuSlide.insertBefore(menuSlideLast, menuSlide.firstChild);
})
menuRbtn.addEventListener('click', function() {
	menuNum === menuSlideLi.length ? menuNum = 1 : menuNum += 1;
	menuPage.textContent = menuNum;
	const menuSlideFirst = document.querySelector('.menu_slide li:first-child');
	menuSlide.insertBefore(menuSlideFirst, menuSlide.lastChild);
})

/* 모바일 메뉴 도트 슬라이드 */
const menuSlide = document.querySelector('.menu_slide');
const menuDots = document.querySelectorAll('.menu_dots li');
for(let i=0; i<menuDots.length; i++) {
	menuDots[i].addEventListener('click', function() {
		for(let i of menuDots) {
			i.classList.remove('dot_on');
		}
		menuDots[i].classList.add('dot_on');
		menuSlide.style.marginLeft = -100*i + '%';
	})
}

/* 모바일 리워드 도트 슬라이드 */
const rewardSlide = document.querySelector('.reward_slide');
const rewardDots = document.querySelectorAll('.reward_dots li');
for(let i=0; i<rewardDots.length; i++) {
	rewardDots[i].addEventListener('click', function() {
		for(let i of rewardDots) {
			i.classList.remove('dot_on');
		}
		rewardDots[i].classList.add('dot_on');
		rewardSlide.style.marginLeft = -50*i + '%';
	})
}

/* 태블릿, PC일 때 메인슬라이드 이미지 변경 */
const slideListImg = document.querySelectorAll('.slide li img');
let imgSrc = [];
let originSrc = [];
for(let i=0; i<slideListImg.length; i++) {
	imgSrc.push('img/slide'+ (i+1) + '.jpg');
	originSrc.push('img/m_slide' + (i+1) + '.jpg');
}
for(let i=0; i<slideListImg.length; i++) {
	if(window.innerWidth >= 768) {
		slideListImg[i].src = imgSrc[i];
	}
}
window.addEventListener('resize', function(){
	for(let i=0; i<slideListImg.length; i++) {
		if(window.innerWidth >= 768) {
			slideListImg[i].src = imgSrc[i];
		} else {
			slideListImg[i].src = originSrc[i];
		}
	}
})