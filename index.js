let toggleMenu=
document.querySelector(".toggle-menu");
let navLinks=
document.querySelector(".nav-links");
toggleMenu.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
})

