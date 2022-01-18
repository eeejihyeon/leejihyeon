const toggleBtn = document.querySelector('.togglebtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');

});