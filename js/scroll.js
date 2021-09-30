const nav = document.querySelector(".main-header");

window.addEventListener("scroll", function(){
    nav.classList.toggle("active", window.scrollY>0)
})





