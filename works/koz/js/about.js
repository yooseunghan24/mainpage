const otext = document.querySelector(".otext");
const ztext = document.querySelector(".ztext");
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("load", function () {
  otext.classList.add("active");
  ztext.classList.add("active");
});
setTimeout(function () {
  window.scrollTo({
    top: document.body.scrollHeight / 2 + 40,
    behavior: "smooth",
  });
}, 5000);
