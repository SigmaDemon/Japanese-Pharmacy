// The hamgurger button's functions are implemented here
const headerButton = document.querySelector('.header_btn');
let menuOpen = false;
headerButton.addEventListener('click', () => {
  if (!menuOpen) {
    headerButton.classList.add('open');
    menuOpen = true;
  } else {
    headerButton.classList.remove('open');
    menuOpen = false;
  }
})

// Open and hide toggle menu on click
function toggleSideBar() {
  document.getElementById('fixed-nav').classList.toggle('active');
} 