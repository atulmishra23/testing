const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
