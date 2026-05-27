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

const cards =
document.querySelectorAll(
".glass-card, .stat-card"
);

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e) => {

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / 20);

const rotateY =
((centerX - x) / 20);

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener(
"mouseleave",
() => {

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)
`;

});

});

const revealElements =
document.querySelectorAll(
"section, .glass-card, .stat-card"
);

const revealOnScroll = () => {

const triggerBottom =
window.innerHeight * 0.88;

revealElements.forEach(el => {

const rect =
el.getBoundingClientRect();

if(rect.top < triggerBottom){

el.classList.add("revealed");

}

});

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();
