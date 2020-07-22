const dontWork = document.querySelectorAll('[href="#"]');
for(let i of dontWork) {
	i.addEventListener('click', function(e){
		e.preventDefault();
	})
}
const menuBtn = document.querySelector('.menu_btn');
const nav = document.querySelector('nav');
const submenu = document.querySelectorAll('nav a');
let sw = 0;
menuBtn.addEventListener('click', function(){
	if(sw === 0 ) {
		this.classList.remove('no_active');
		this.classList.add('active');
		nav.classList.add('active');
		submenu.forEach(function(item){
			item.classList.add('active');
		})
		sw = 1;
	} else {
		this.classList.remove('active');
		this.classList.add('no_active');
		sw = 0;
		nav.classList.remove('active');
		submenu.forEach(function(item){
			item.classList.remove('active');
		})
	}
})