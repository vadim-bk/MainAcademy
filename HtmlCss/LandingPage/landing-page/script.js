document.querySelector(".menu-icon-wrapper").onclick = function () {
  document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  document
    .querySelector(".menu-list-wrapper")
    .classList.toggle("menu-list-wrapper-active");
};
