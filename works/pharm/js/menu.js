//메뉴 호버 jQuery
$('nav > ul').mouseenter(function(){
    $('.sub_menu, .sub_menu_back').stop().slideDown();
  });
  $('nav').mouseleave(function(){
    $('.sub_menu, .sub_menu_back').stop().slideUp();
});
const dontA = document.querySelectorAll('[href="#"]');
for(let i of dontA) {
  i.addEventListener('click', (e) => {
    e.preventDefault();
  })
}
const navLi = document.querySelectorAll('nav > ul > li > a');
for(let i of navLi) {
  i.addEventListener('focus', () => {
    $('.sub_menu, .sub_menu_back').stop().slideDown();
  })
}
const renewal = document.querySelectorAll('.renewal');
for(let i of renewal) {
  i.addEventListener('click', (e)=> {
    alert('준비중입니다.');
    e.preventDefault();
  });
}