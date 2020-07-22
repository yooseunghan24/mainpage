//tab버튼
function showmenu(e, id, neighbor) {
  var show = document.querySelector('.'+id);
  var notVisi = document.querySelector('.'+neighbor);
  notVisi.style.display = 'none';
  show.style.display = 'block';
  if(!e.classList.contains('on')) {
    var tablinks = document.querySelectorAll('.tablink');
    for(var i=0; i<tablinks.length; i++) {
    tablinks[i].classList.remove('on');
    }
    e.classList.add('on');
  }
}