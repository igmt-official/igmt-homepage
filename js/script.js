const btnNavEl = document.querySelector(".btn-mobile-nav");
const bodyEl = document.querySelector(".body");

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("nav-open");
});
