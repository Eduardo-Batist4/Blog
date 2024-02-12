document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header-container');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.backgroundColor = '#c2c2c2'
            logo.style.color = '#000000'
        } else {
            navbar.style.backgroundColor = 'transparent'
            logo.style.color = '#ffffff'
        }
    })
});

const btnOpen = document.querySelector('.open-menu');
const btnClose = document.querySelector('.close-menu');
const navMenu = document.querySelector('.nav');

btnOpen.addEventListener('click', () => {
    navMenu.classList.add('nav-mobile');
    btnOpen.classList.add('off')
    btnClose.classList.add('on')
})
btnClose.addEventListener('click', () => {
    navMenu.classList.remove('nav-mobile');
    btnOpen.classList.remove('off')
    btnClose.classList.remove('on')
})
