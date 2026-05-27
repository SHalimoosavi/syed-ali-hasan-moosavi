const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

menuBtn.addEventListener(
"click",
() => {

mobileMenu.classList.toggle("active");

});

document.querySelectorAll(
".mobile-menu a"
).forEach(link => {

link.addEventListener(
"click",
() => {

mobileMenu.classList.remove("active");

});

});

const progressBar =
document.querySelector(".scroll-progress");

window.addEventListener(
"scroll",
() => {

const scrollTop =
window.scrollY;

const docHeight =
document.body.scrollHeight -
window.innerHeight;

const scrollPercent =
(scrollTop / docHeight) * 100;

progressBar.style.width =
scrollPercent + "%";

});

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener(
"mousemove",
(e) => {

cursorGlow.style.left =
e.clientX + "px";

cursorGlow.style.top =
e.clientY + "px";

});
