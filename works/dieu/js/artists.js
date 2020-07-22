const portrait = document.querySelectorAll(".portrait");
const infoWrap = document.querySelectorAll(".info_wrap");
const infoClose = document.querySelectorAll(".close");
for (let i = 0; i < portrait.length; i++) {
  portrait[i].addEventListener("click", function () {
    infoWrap[i].style.display = "flex";
  });
  portrait[i].addEventListener("mouseover", function () {
    for (let i of portrait) {
      i.classList.remove("active");
    }
    this.classList.add("active");
  });
  infoClose[i].addEventListener("click", function () {
    this.parentNode.style.display = "none";
  });
}
