let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let navBar =  document.querySelector('nav');
let pageBackground = document.querySelector('.container');

openMenu.onclick = function() {
   navBar.style.left = '0';
   pageBackground.style.opacity = '0';
};

closeMenu.onclick = function(){
    navBar.style.left = '-320px'
    pageBackground.style.opacity = '1'
}