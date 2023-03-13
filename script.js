const sidebar = document.querySelector(".header__sidebar");
const burgerBtn = document.querySelector(".header__burger");

const init = () => {
  burgerBtn.addEventListener("click", () => sidebar.classList.toggle("header__sidebar_active"))
}

document.addEventListener("DOMContentLoaded", init)