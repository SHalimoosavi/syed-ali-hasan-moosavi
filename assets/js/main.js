window.addEventListener("load", () => {

const loader =
document.querySelector(".loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

document.body.style.overflow = "auto";

}, 1200);

}

});



const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

if(menuBtn && mobileMenu){

menuBtn.addEventListener(
"click",
() => {

mobileMenu.classList.toggle("active");

});
}



document.querySelectorAll(
".mobile-menu a"
).forEach(link => {

link.addEventListener(
"click",
() => {

mobileMenu.classList.remove(
"active"
);

});

});



const progressBar =
document.querySelector(
".scroll-progress"
);

window.addEventListener(
"scroll",
() => {

const scrollTop =
window.scrollY;

const docHeight =
document.body.scrollHeight -
window.innerHeight;

const progress =
(scrollTop / docHeight) * 100;

if(progressBar){

progressBar.style.width =
progress + "%";

}

const network =
document.querySelector(
".ecosystem-network"
);

const grid =
document.querySelector(
".ai-grid"
);

if(network){

network.style.transform =
`translateY(${scrollTop * 0.12}px)`;

}

if(grid){

grid.style.transform =
`translateY(${scrollTop * 0.05}px)`;

}

});
