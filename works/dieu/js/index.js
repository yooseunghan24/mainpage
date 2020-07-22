/* 인덱스 이벤트 */
const html = document.documentElement;
const subTitle = document.querySelector('.sub_title');
const pictureWrap = document.querySelectorAll('.picture_wrap');
let mL = 0;
let posX = [50, 900, 200, 950, 1500, 1950, 2600, 2650];
function mainImgMove() {
	subTitle.style.left = (650+mL) + 'px'; 
	for(let i=0; i<pictureWrap.length; i++) {
		pictureWrap[i].style.left = (posX[i] + mL) + 'px';
	}
}
if(window.innerWidth >= 1024) {
	html.addEventListener('wheel', function(e){
		let delta = e.deltaY;
		delta > 0 ? html.scrollLeft += 50 : html.scrollLeft -= 50;
		if(delta > 0) {
			if(html.scrollLeft === 1380 || html.scrollLeft === 100) return false;
			mainImgMove();
			mL -= 10;
		} else {
			if(html.scrollLeft === 0 || html.scrollLeft === 1280) return false;
			mainImgMove();
			mL += 10;
		}
	})
}