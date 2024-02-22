//Mobile Menu

document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile');

    hamburgerButton.addEventListener('click',() => mobileMenu.classList.toggle('active')
    );
})