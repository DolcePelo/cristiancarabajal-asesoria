const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

hamburgerMenu.addEventListener('click', (event)=>{
    event.stopPropagation();

    if (menuOpen){
        mobileMenu.style.display = 'none';
        menuOpen = false; 
    } else {
        mobileMenu.style.display = 'block';
        menuOpen = true;
    }
})