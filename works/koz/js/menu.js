const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector("nav");
const artist = document.querySelector(".artist");
const artistul = document.querySelector(".artist_ul");
const preventA = document.querySelectorAll('[href="#"]');
for (let i = 0; i < preventA.length; i++) {
  preventA[i].addEventListener("click", (e) => e.preventDefault());
}
let artistSw = 0;
artist.addEventListener("click", function () {
  if (artistSw === 0) {
    artistul.classList.add("active");
    artistSw = 1;
  } else {
    artistul.classList.remove("active");
    artistSw = 0;
  }
});
let menuSw = 0;
menuBtn.addEventListener("click", function () {
  if (menuSw === 0) {
    nav.style.transform = "translateY(0)";
    menuBtn.classList.add("active");
    menuSw = 1;
  } else {
    nav.style.transform = "translateY(-100vh)";
    menuBtn.classList.remove("active");
    menuSw = 0;
  }
});
