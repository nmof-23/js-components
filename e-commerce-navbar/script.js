const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const closeMenu = menu.querySelector(".mobile-menu-close");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const menuOverlay = document.querySelector(".menu-overlay")
let subMenu;

menuMain.addEventListener("click" ,(e)=> {

    if(!menu.classList.contains("active")){
        return;
       
    }

    if(e.target.closest(".menu-item-has-children")){
        const hasChild = e.target.closest(".menu-item-has-children")
        console.log(hasChild);
        showSubMenu(hasChild)
    }
})

goBack.addEventListener("click" , (e) => {
    hideSubMenu();
});
closeMenu.addEventListener("click" , () => {
    toggleMenu();
});

menuTrigger.addEventListener("click" , () => {
    toggleMenu();
})
menuOverlay.addEventListener("click" , () => {
    toggleMenu();
})

function showSubMenu(hasChild){
    subMenu = hasChild.querySelector(".sub-menu")
    subMenu.classList.add("active")
    subMenu.style.animation = "slideLeft 0.5s ease forwards"
    // console.log(subMenu);
    const menuTitle = hasChild.querySelector("i").parentNode.childNodes[0].textContent
    console.log(menuTitle);
    menu.querySelector(".current-menu-title").innerHTML = menuTitle
    menu.querySelector(".mobile-menu-head").classList.add("active")

}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards"
    setTimeout(() => {
        subMenu.classList.remove("active")
    },3000)
    menu.querySelector(".current-menu-title").innerHTML = ""
    menu.querySelector(".mobile-menu-head").classList.remove("active")
}

window.onresize = function() {
    if(this.innerWidth > 991) {
        if(menu.classList.contains("active")){
            toggleMenu();
        }
    }

}

function toggleMenu() {
    menu.classList.toggle("active")
    menuOverlay.classList.toggle("active")
}
