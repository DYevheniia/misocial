const burgerMenu = document.getElementById('burger');
const headerMenu = document.getElementById('headerMenu');

// let burgers = document.querySelectorAll(".burger-menu")
// let btmenu = document.querySelector(".btmenu")

// burgers.forEach(function(burger){
//     burger.onclick = function(){
//         btmenu.classList.toggle("headerrMenu")
//     }
// })

burgerMenu.addEventListener('click', function() {
    if(headerMenu.style.display === 'block'){
        headerMenu.style.display ="none"   
        burgerMenu.classList.toggle("burgeropen")
        headerMenu.classList.toggle("headerrMenu")
       
    } else{
        headerMenu.style.display = "block"
        headerMenu.classList.toggle("headerrMenu")
        burgerMenu.classList.toggle("burgeropen")
    }
});



