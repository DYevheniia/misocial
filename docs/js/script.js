const burgerMenu=document.getElementById("burger"),headerMenu=document.getElementById("headerMenu");burgerMenu.addEventListener("click",(function(){"none"===headerMenu.style.display?headerMenu.style.display="block":headerMenu.style.display="none"}));