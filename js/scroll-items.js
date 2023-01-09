

const fadeInRight = document.querySelector(".fadeInRight");
const fadeInLeft = document.querySelector(".fadeInLeft");
const fadeInTop = document.querySelector(".fadeInTop");

window.addEventListener("scroll",()=>{
    let scrolled = window.scrollY;
    console.log(scrolled);

    if (scrolled > 350) {
        fadeInRight.style.right = "0px";
        fadeInLeft.style.left = "0px";
        fadeInTop.style.top = "0px";
        fadeInRight.style.opacity = "1";
        fadeInLeft.style.opacity = "1";
        fadeInTop.style.opacity = "1";
    }    
    

});