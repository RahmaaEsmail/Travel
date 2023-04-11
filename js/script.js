const close = document.querySelector(".close-icon");
const header = document.querySelector("header .container");
close.addEventListener("click",()=>{
    header.classList.remove("open-menu");
})

const open = document.querySelector(".menu-icon");
open.addEventListener("click",()=>{
    header.classList.add("open-menu")
})