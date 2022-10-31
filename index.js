
const navBtn = document.getElementById('nav-btn');
const navPrimary = document.getElementById('nav-primary');
const navLinks = document.querySelectorAll('#nav-primary a');


navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('opened');
  navPrimary.classList.toggle('reveal');
});

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navPrimary.classList.remove('reveal');
    navBtn.classList.remove('opened');
  });
});
