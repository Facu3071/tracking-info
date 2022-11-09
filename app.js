const btn = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
function showMenu() {
  btn.classList.toggle("show");
  menu.classList.toggle("show");
}

btn.addEventListener("click", showMenu);
