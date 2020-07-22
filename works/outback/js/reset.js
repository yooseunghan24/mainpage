/* href속성이 #인 태그 이동 막기 */
const no = document.querySelectorAll('[href="#"]');
for(let i of no) {
	i.addEventListener('click', function(e) {
		e.preventDefault();
	})
}

const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('resize', function(){
	let windowWidth = window.innerWidth;
	/* 네비게이션 */
	if(window.innerWidth >= 1024) {
		nav.style.transform = 'translateX(0)';
	} else {
		nav.style.transform = 'translateX(-100%)';
  }
	if(windowWidth >= 1024) {
		$('.gnb > li').hover(function(){ // PC 메뉴
			$(this).find('.sub_menu').stop().slideDown();
		},function(){
			$(this).find('.sub_menu').stop().slideUp();
		})
	}
  /* 헤더 색깔 변경(모바일, 태블릿일때만) */
	if(window.innerWidth < 1023) {
		let winScrollY = window.scrollY;
		winScrollY > 0 ? header.classList.add('headerOn') :
		header.classList.remove('headerOn');
	} else {
		header.classList.remove('headerOn');
	}
	if(window.innerWidth >= 1024) {
		$('.gnb > li').hover(function(){
			$(this).find('.sub_menu').stop().slideDown();
		},function(){
			$(this).find('.sub_menu').stop().slideUp();
		})
		$('.gnb > li > a').focus(function() { // 탭버튼으로 메뉴 선택하기
			$(this).siblings().stop().slideDown();
		});
		$('.sub_menu li:last-child a').blur(function() {
			$('.sub_menu').stop().slideUp();
		})
		$('.navback').fadeOut();
	} else {
		//$('.gnb > li').off();
		$('.submenu_title').click(clickMenu);
	}
}) // 여기까지 resize

let windowWidth = window.innerWidth;
/* 헤더 색깔 변경 */
window.addEventListener('scroll', function() {
	if(window.innerWidth < 1023) {
		let winScrollY = window.scrollY;
  	winScrollY > 0 ? header.classList.add('headerOn') :
		header.classList.remove('headerOn');
	}
})
if(window.innerWidth < 1023) {
	let winScrollY = window.scrollY;
	winScrollY > 0 ? header.classList.add('headerOn') :
	header.classList.remove('headerOn');
}
/* 모바일 메뉴는 클릭, 데스크탑 메뉴는 호버 */
let menuSw = 0;
function clickMenu() { // 모바일 메뉴 클릭 이벤트
	if($(this).children().hasClass('arrow_ani') && menuSw == 1) {
		$(this).children().removeClass('arrow_ani');
		$(this).siblings().stop().slideUp();
		menuSw = 0;
	} else {
		$('.sub_menu').stop().slideUp();
		$(this).parent().siblings().find('.arrow').removeClass('arrow_ani');
		$(this).siblings().stop().slideDown();
		$(this).children().addClass('arrow_ani');
		menuSw = 1;
	}
}
if(window.innerWidth >= 1024) {
	$('.gnb > li').hover(function(){
		$(this).find('.sub_menu').stop().slideDown();
	},function(){
		$(this).find('.sub_menu').stop().slideUp();
	})
	$('.gnb > li > a').focus(function() {
		$(this).siblings().stop().slideDown();
	});
	$('.sub_menu li:last-child a').blur(function() {
		$('.sub_menu').stop().slideUp();
	})
} else {
	$('.submenu_title').click(clickMenu);
}
/* 모바일 토글 버튼 이벤트 */
let navSw = 0;
$('.toggle_btn').click(function(){
	if(navSw === 0) {
		$(this).removeClass('toggle_btn_ani_off').addClass('toggle_btn_ani');
		$('nav').css('transform', 'translateX(0)');
		$('.navback').fadeIn();
		navSw = 1;
	} else {
		$(this).removeClass('toggle_btn_ani').addClass('toggle_btn_ani_off');
		$('nav').css('transform', 'translateX(-100%)');
		$('.navback').fadeOut();
		navSw = 0;
	}
});