let burgerNav = document.querySelector('.header_primary-logo-mobile');
let headerMenu = document.querySelector('.header_primary-mobile-list');

const openMenu = () => {
    if (headerMenu.classList.contains('open')) {
        headerMenu.classList.remove('open');
        headerMenu.style.removeProperty("height")
    } else {
        headerMenu.classList.add('open');
        headerMenu.style.height="auto"
    }
};