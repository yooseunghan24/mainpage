const cardWrap = document.querySelectorAll('.card_wrap');
const front = document.querySelectorAll('.front');
const back = document.querySelectorAll('.back');
const start = document.querySelector('.start');
const again = document.querySelector('.again');
const cnt = document.querySelector('.count');
const life = document.querySelector('.life');
const correctOrwrong = document.querySelector('.correct_or_wrong');

// 카드 섞기
function shuffle() {
  let original = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  for (let i = original.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [original[i], original[j]] = [original[j], original[i]];
  }
  for (let i = 0; i < original.length; i++) {
    front[i].textContent = original[i];
  }
}
// 5초 동안 모든 카드 앞면 보여주고 다시 뒤집기
function firstShow() {
  for (let i of cardWrap) {
    i.classList.add('turn');
    i.style.pointerEvents = 'none';
  }
  setTimeout(() => {
    for (let i of cardWrap) {
      i.classList.remove('turn');
      i.classList.remove('done');
      i.style.pointerEvents = 'auto';
    }
  }, 5000);
}
// 카운트
function count() {
  let i = 4;
  let countText = setTimeout(function tick() {
    cnt.textContent = i;
    i -= 1;
    countText = setTimeout(tick, 1000);
    if (i === -1) {
      cnt.textContent = '시작!';
      clearTimeout(countText);
    }
  }, 1000)
}
// 카드 클릭했을 때
let compareCard = [];
function checkCard() {
  this.classList.add('turn');
  compareCard.push(+this.firstElementChild.textContent);
  if (compareCard.length === 2) {
    if (compareCard[0] === compareCard[1]) {
      correct();
    } else {
      wrong();
    }
    compareCard = [];
  }
}
// 맞췄을 때
let correctLength = 0;
function correct() {
  correctOrwrong.style.color = 'green';
  correctOrwrong.textContent = '맞췄어요!';
  for (let i = 0; i < cardWrap.length; i++) {
    if (cardWrap[i].classList.contains('turn')) {
      cardWrap[i].classList.remove('turn');
      cardWrap[i].classList.add('done');
    }
  }
  correctLength += compareCard.length;
  if (correctLength === cardWrap.length) {
    correctOrwrong.style.color = 'green';
    correctOrwrong.textContent = '축하합니다! 모두 맞췄어요.';
  }
}
// 틀렸을 때
let gameover = 0;
let lifeNum = 3;
function wrong() {
  lifeNum -= 1;
  life.textContent = lifeNum;
  gameover += 1;
  if (gameover === 3) {
    correctOrwrong.style.color = 'red';
    correctOrwrong.textContent = '게임오버! 다시하려면 게임시작 버튼을 누르세요.';
    setTimeout(() => {
      for (let i of cardWrap) {
        i.classList.add('turn');
        i.style.pointerEvents = 'none';
      }
    }, 500)
  } else {
    correctOrwrong.style.color = 'red';
    correctOrwrong.textContent = '다시 해보세요';
    setTimeout(() => {
      for (let i of cardWrap) {
        i.classList.remove('turn');
      }
    }, 500)
  }
}
// 초기화
function init() {
  shuffle();
  firstShow();
  count();
  gameover = 0;
  correctOrwrong.textContent = '';
  life.textContent = 3;
  lifeNum = 3;
}
// 게임시작
start.addEventListener('click', init);
cardWrap.forEach((card) => {
  card.addEventListener('click', checkCard);
})