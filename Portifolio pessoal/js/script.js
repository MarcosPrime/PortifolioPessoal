const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("fixed-header", window.scrollY > 200)

});


