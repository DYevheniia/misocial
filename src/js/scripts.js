const burgerMenu = document.getElementById('burger');
const headerMenu = document.getElementById('headerMenu');

burgerMenu.addEventListener('click', function() {
    if(headerMenu.style.display === 'none'){
        headerMenu.style.display ="block"
    } else{
        headerMenu.style.display = "none"
    }
});