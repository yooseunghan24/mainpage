const mapTab = document.querySelectorAll('.map_tab a');
const map = document.querySelectorAll('.map');
for(let i=0; i<mapTab.length; i++) {
  mapTab[i].addEventListener('click', function(e){
    e.preventDefault();
    for(let i=0; i<mapTab.length; i++) {
      mapTab[i].classList.remove('on');
      map[i].style.display = 'none';
    }
    this.classList.add('on');
    map[i].style.display = 'block';
  })
}