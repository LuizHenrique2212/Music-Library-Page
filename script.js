let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let navBar = document.querySelector('nav');

openMenu.onclick = function () {
    navBar.style.display = 'block';
    navBar.style.zIndex = '1';
    openMenu.style.display = 'none';
}

closeMenu.onclick = function () {
    navBar.style.display = 'none';
    navBar.style.zIndex = '';
    openMenu.style.display = '';
}