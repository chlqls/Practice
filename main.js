const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => { //클릭할 때마다 실행
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
