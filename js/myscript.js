const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('touchstart', (event)=>{
    event.stopPropagation();

    mobileMenu.style.display = 'block'
})