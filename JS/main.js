const burger = document.getElementById("burger");
const tab = document.getElementsByTagName("pomo");
const menu = document.getElementById("menu");



const burgerToggleMenu = (menu) => {
    menu.classList.add("menuActive");
    menu.removeEventListener("click",()=>{})
    menu.addEventListener("click",()=>{burgerHideMenu(menu)});
    
    }

burger.addEventListener("click", ()=> burgerShowMenu(menu))