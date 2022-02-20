let openMenu = document.querySelector('.open-menu');
let closeMenu = document.querySelector('.close-menu');
let navBar =  document.querySelector('nav');

openMenu.onclick = function() {
   navBar.style.left = '0';
};

closeMenu.onclick = function(){
    navBar.style.left = '-320px';
}