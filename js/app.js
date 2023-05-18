const header = document.querySelector("header");

function stickyNavBar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
 }
 
 window.addEventListener("scroll", stickyNavBar);