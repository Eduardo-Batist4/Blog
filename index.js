// const menuLinks = document.querySelectorAll('nav a[href^="#"]');

// function getDistanceFromTheTop(element) {
//     const id = element.getAttribute('href');
//     return document.querySelector(id).offsetTop;
// }

// function nativeScroll(distanceFromTheTop) {
//     window.scroll({
//         top: distanceFromTheTop,
//         behavior: 'smooth',
//     });
// };

// function scrollToSection(event) {
//     event.preventDefault();
//     const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
//     nativeScroll(distanceFromTheTop);
// }


// menuLinks.forEach((link) => {
//     link.addEventListener('click', scrollToSection);
// });

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