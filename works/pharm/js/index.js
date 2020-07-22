const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dot = document.querySelectorAll('.dot');
let idx = 0;
slide[0].style.display = 'block';
dot[0].classList.add('active');
function slideFade() {
  for(let i=0; i<slide.length; i++) {
    slide[i].style.display = 'none';
    dot[i].classList.remove('active');
  }
  idx += 1;
  if(idx === 4) idx = 0;
  slide[idx].style.display = 'block';
  dot[idx].classList.add('active');
}

let slideShow = setInterval(slideFade, 3000)
prev.addEventListener('click', function() {
  clearInterval(slideShow);
  idx -= 1;
  if(idx === -1) idx = 3;
  for(let i=0; i<slide.length; i++) {
    slide[i].style.display = 'none';
    dot[i].classList.remove('active');
  }
  slide[idx].style.display = 'block';
  dot[idx].classList.add('active');
  slideShow = setInterval(slideFade, 3000);
})

next.addEventListener('click', function() {
  clearInterval(slideShow);
  idx += 1;
  if(idx === 4) idx = 0;
  for(let i=0; i<slide.length; i++) {
    slide[i].style.display = 'none';
    dot[i].classList.remove('active');
  }
  slide[idx].style.display = 'block';
  dot[idx].classList.add('active');
  slideShow = setInterval(slideFade, 3000);
})

for(let i=0; i<dot.length; i++) {
  dot[i].addEventListener('click', function() {
    clearInterval(slideShow);
    for(let i=0; i<slide.length; i++) {
      slide[i].style.display = 'none';
      dot[i].classList.remove('active');
    }
    slide[i].style.display = 'block';
    dot[i].classList.add('active');
    slideShow = setInterval(slideFade, 3000);
    idx = i;
  })
}

const news = document.querySelectorAll('.news_popup');
for(let i=0; i<news.length;i++) {
  news[i].addEventListener('click', () => {
    window.open('category/news' + [i+1] + '.html','','width=1200, height=800');
  })
}