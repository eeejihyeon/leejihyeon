// Mobile menu button toggle //

const toggleBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");

function menuToggle() {
  toggleBtn.classList.toggle("active");
  menu.classList.toggle("flex");
}

toggleBtn.addEventListener("click", menuToggle);
