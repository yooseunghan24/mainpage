const moveWrap = document.querySelector(".move_wrap");
const galleryWrap = document.querySelectorAll(".gallery_wrap");
const toTop = document.querySelector(".top");
window.addEventListener("load", () => {
  galleryWrap[0].classList.add("active");
});
let index = 0;
let wheelMove;
if(window.innerWidth >= 768) {
  window.addEventListener("wheel", (e) => {
    clearTimeout(wheelMove);
    wheelMove = setTimeout(function () {
      let deltaY = e.deltaY;
      if (deltaY > 0) {
        index === 3 ? (index = 3) : (index += 1);
        moveWrap.style.marginTop = `${-100 * index}vh`;
        galleryWrap[index].classList.add("active");
      } else {
        index === 0 ? (index = 0) : (index -= 1);
        moveWrap.style.marginTop = `${-100 * index}vh`;
      }
    }, 150);
  });
}
toTop.addEventListener("click", () => {
  index = 0;
  moveWrap.style.marginTop = 0;
});
