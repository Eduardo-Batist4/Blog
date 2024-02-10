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