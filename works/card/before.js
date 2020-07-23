const cardWrap = document.querySelectorAll('.card_wrap');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
const start = document.querySelector('.start');
const again = document.querySelector('.again');
const cnt = document.querySelector('.count');
const correctOrwrong = document.querySelector('.correct_or_wrong');
// 카드에 랜덤으로 숫자 넣기
let original = [1, 1, 2, 2, 3, 3, 4, 4];
function shuffle(original) {
	for(let i=original.length-1; i>0; i--) {
		let j = Math.floor(Math.random() * i);
		[original[i], original[j]] = [original[j], original[i]];
	}
}
shuffle(original);
for(let i=0; i<original.length; i++) {
	front[i].textContent = original[i];
}
let arr = []; // 선택한 카드의 값을 넣어놓을 배열
let win = []; // 카드 짝을 맞췄을 때 그 값을 넣어놓을 배열
let gameover = 0;
function wrong() {
	for(let i of cardWrap) {
		i.classList.remove('turn');
	}
}
for(let i=0; i<cardWrap.length; i++) {
	cardWrap[i].addEventListener('click', function() {
		if(cardWrap[i].classList.contains('turn') ||
		cardWrap[i].classList.contains('done')) return false;
		let child = cardWrap[i].children;
		cardWrap[i].classList.add('turn');
		arr.push(child[0].textContent);
		if(arr.length === 2) {
			if(arr[0] === arr[1]) {
				correctOrwrong.style.color = 'green';
				correctOrwrong.textContent = '맞췄어요!';
				for(let i=0; i<cardWrap.length; i++) {
					if(cardWrap[i].classList.contains('turn')) {
						cardWrap[i].classList.remove('turn');
						cardWrap[i].classList.add('done');
						front[i].style.transform = 'rotateY(0)';
						back[i].style.transform = 'rotateY(180deg)';
					}
				}
				win += arr.pop();
				win += arr.pop();
				if(win.length === 8) {
					correctOrwrong.style.color = 'green'
					correctOrwrong.textContent = '모두 맞췄어요!';
				}
			} else { // 고른 값이 같지 않다면 실행할 문
				gameover += 1;
				if(gameover < 3) {
					correctOrwrong.style.color = 'red';
					correctOrwrong.textContent = '다시 해보세요';
					setTimeout(wrong, 500)
				} else {
					correctOrwrong.style.color = 'red';
					correctOrwrong.textContent = '게임오버!';
					setTimeout(function() {
						for(let i of cardWrap) {
							i.classList.add('turn');
							i.style.pointerEvents = 'none';
						}
					}, 500)
				}
			}
			arr.pop();
			arr.pop();
		}
	}) // click event
} // for문
// 게임시작 버튼
start.addEventListener('click', function() {
	for(let i of cardWrap) {
		i.classList.add('turn');
		i.style.pointerEvents = 'none';
	}
	setTimeout(() => {
		for(let i of cardWrap) {
			i.classList.remove('turn');
			i.style.pointerEvents = 'auto';
		}
	}, 5000);
	let i=4;
	let count = setTimeout(function tick() {
		cnt.textContent = i;
		i -= 1;
		count = setTimeout(tick, 1000);
		if(i === -1) {
			cnt.textContent = '시작!';
			clearTimeout(count);
		}
	}, 1000)
})