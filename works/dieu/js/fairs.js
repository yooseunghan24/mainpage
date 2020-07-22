const closeBtn = document.querySelector('.close');
const directionModal = document.querySelector('.direction_modal');
const directionBtn = document.querySelectorAll('.direction_btn');
closeBtn.addEventListener('click', function(){
  directionModal.style.display = 'none';
})
const img = document.createElement('img');
const src = document.createAttribute('src');
const alt = document.createAttribute('alt');
img.setAttributeNode(src);
img.setAttributeNode(alt);
directionModal.appendChild(img);
const imgSrc = ['img/newyork_map.jpg', 'img/los_map.jpg', 'img/london_map.jpg', 'img/paris_map.jpg'];
const imgAlt = ['newyork', 'los angeles', 'london', 'paris'];
for(let i=0; i<directionBtn.length; i++) {
  directionBtn[i].addEventListener('click', function(){
    directionModal.style.display = 'block';
    img.src = imgSrc[i];
    img.alt = imgAlt[i];
  })
}