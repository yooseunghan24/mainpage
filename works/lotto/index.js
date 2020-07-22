const lottoBtn = document.querySelector('.lotto');
const accumulate = document.querySelector('.accumulate');
const resetBtn = document.querySelector('.reset');
const sheet = document.querySelector('#sheet');
let cycle=0;
function lotto() {
  const sheetIdx = sheet.options[sheet.selectedIndex].index;
  const allNumber = new Set();
  while(true) {
    if(allNumber.size === 45) break;
    allNumber.add(Math.floor(Math.random()*45)+1);
  }
  const toArray = Array.from(allNumber);
  const result = [];
  for(let i=0; i<6; i++) {
    result[i] = toArray.pop();
  }
  const sortResult = result.sort((a,b) => a-b);
  const div = document.createElement('div');
  div.textContent = sortResult;
  accumulate.appendChild(div);
  if(sheetIdx === 1) { // 5게임
    cycle += 1;
    if(cycle === 5) {
      cycle = 0;
      return false;
    }
    lotto();
  } else if(sheetIdx === 2) { // 10게임
    cycle += 1;
    if(cycle === 10) {
      cycle = 0;
      return false;
    }
    lotto();
  }
}
lottoBtn.addEventListener('click', lotto);
resetBtn.addEventListener('click', function() {
  const div = document.querySelectorAll('.accumulate div');
  for(let i of div) {
    i.parentNode.removeChild(i);
  } 
})