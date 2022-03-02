let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let navBar =  document.querySelector('nav');
let pageBackground = document.querySelector('.container');
let mainDisplay = document.querySelector('.main-display');

openMenu.onclick = function() {
    navBar.style.left = '0';
    navBar.style.zIndex = '100000';
    mainDisplay.style.opacity = '0.3';
};

closeMenu.onclick = function(){
    navBar.style.left = '-400px';
    navBar.style.zIndex = '';
    mainDisplay.style.opacity = '1';
}