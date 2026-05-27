/* ======================================================
   SYED ALI HASAN MOOSAVI
   FOUNDER COMMAND CENTER
   PHASE 8C FINAL JAVASCRIPT
====================================================== */

/* ======================================================
   ROLE ROTATOR
====================================================== */

const roles = [
  "Founder",
  "Software Architect",
  "AI Product Builder",
  "Entrepreneur",
  "Technology Innovator",
  "Business Strategist",
  "Visionary Technologist"
];

const typingText =
document.getElementById(
"typing-text"
);

if(typingText){

let roleIndex = 0;

typingText.textContent =
roles[roleIndex];

setInterval(()=>{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

typingText.style.opacity="0";

setTimeout(()=>{

typingText.textContent =
roles[roleIndex];

typingText.style.opacity="1";

},300);

},2500);

}

/* ======================================================
   MOBILE MENU
====================================================== */

const menuToggle =
document.getElementById(
"menuToggle"
);

const navLinks =
document.getElementById(
"navLinks"
);

if(menuToggle && navLinks){

menuToggle.addEventListener(
"click",
()=>{

navLinks.classList.toggle(
"show"
);

}
);

}

document
.querySelectorAll(
"#navLinks a"
)
.forEach(link=>{

link.addEventListener(
"click",
()=>{

if(navLinks){

navLinks.classList.remove(
"show"
);

}

}
);

});

/* ======================================================
   NAVBAR EFFECT
====================================================== */

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.background =
"rgba(5,8,22,.95)";

navbar.style.boxShadow =
"0 10px 40px rgba(0,0,0,.4)";

}else{

navbar.style.background =
"rgba(5,8,22,.75)";

navbar.style.boxShadow =
"none";

}

}
);

/* ======================================================
   SMOOTH SCROLL
====================================================== */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(
"href"
)
);

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

}
);

});

/* ======================================================
   ACTIVE SECTION NAVIGATION
====================================================== */

const sections =
document.querySelectorAll(
"section[id]"
);

window.addEventListener(
"scroll",
()=>{

const scrollY =
window.pageYOffset;

sections.forEach(section=>{

const sectionHeight =
section.offsetHeight;

const sectionTop =
section.offsetTop - 150;

const sectionId =
section.getAttribute("id");

const navItem =
document.querySelector(
'.nav-links a[href="#'+
sectionId +
'"]'
);

if(
scrollY > sectionTop &&
scrollY <= sectionTop + sectionHeight
){

if(navItem){

navItem.style.color =
"#00e0ff";

}

}else{

if(navItem){

navItem.style.color =
"";

}

}

});

}
);

/* ======================================================
   REVEAL ON SCROLL
====================================================== */

const revealItems =
document.querySelectorAll(
".card,.section-header"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"active"
);

}

});

},

{
threshold:0.1
}

);

revealItems.forEach(item=>{

item.classList.add(
"reveal"
);

revealObserver.observe(item);

});

/* ======================================================
   COUNTER ANIMATION
====================================================== */

const counters =
document.querySelectorAll(
".counter"
);

function animateCounter(counter){

const target =
parseInt(
counter.dataset.target
);

let count = 0;

const increment =
target / 120;

function update(){

count += increment;

if(count < target){

counter.textContent =
Math.floor(count);

requestAnimationFrame(
update
);

}else{

counter.textContent =
target;

}

}

update();

}

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(
entry.target
);

counterObserver.unobserve(
entry.target
);

}

});

},

{
threshold:0.3
}

);

counters.forEach(counter=>{

counterObserver.observe(
counter
);

});

/* ======================================================
   PARTICLE ENGINE
====================================================== */

const canvas =
document.getElementById(
"particles"
);

if(canvas){

const ctx =
canvas.getContext("2d");

let particles = [];

function resizeCanvas(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

class Particle{

constructor(){

this.x =
Math.random() *
canvas.width;

this.y =
Math.random() *
canvas.height;

this.radius =
Math.random() * 2 + 1;

this.speedX =
(Math.random()-0.5)*0.4;

this.speedY =
(Math.random()-0.5)*0.4;

}

update(){

this.x += this.speedX;
this.y += this.speedY;

if(this.x < 0)
this.x = canvas.width;

if(this.x > canvas.width)
this.x = 0;

if(this.y < 0)
this.y = canvas.height;

if(this.y > canvas.height)
this.y = 0;

}

draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.radius,
0,
Math.PI*2
);

ctx.fillStyle =
"rgba(91,140,255,.45)";

ctx.fill();

}

}

function initParticles(){

particles = [];

for(let i=0;i<150;i++){

particles.push(
new Particle()
);

}

}

function connectParticles(){

for(let a=0;a<particles.length;a++){

for(let b=a;b<particles.length;b++){

const dx =
particles[a].x -
particles[b].x;

const dy =
particles[a].y -
particles[b].y;

const distance =
dx*dx + dy*dy;

if(distance < 12000){

ctx.beginPath();

ctx.strokeStyle =
"rgba(91,140,255,.08)";

ctx.lineWidth = 1;

ctx.moveTo(
particles[a].x,
particles[a].y
);

ctx.lineTo(
particles[b].x,
particles[b].y
);

ctx.stroke();

}

}

}

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

p.update();
p.draw();

});

connectParticles();

requestAnimationFrame(
animateParticles
);

}

initParticles();
animateParticles();

}

/* ======================================================
   PARALLAX HERO
====================================================== */

const hero =
document.querySelector(
".hero"
);

window.addEventListener(
"scroll",
()=>{

if(!hero) return;

const offset =
window.pageYOffset;

hero.style.transform =
"translateY(" +
(offset * 0.15) +
"px)";

}
);

/* ======================================================
   PERFORMANCE
====================================================== */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

}
);

/* ======================================================
   CONSOLE SIGNATURE
====================================================== */

console.log(
"%cSYED ALI HASAN MOOSAVI",
"color:#5b8cff;font-size:16px;font-weight:bold;"
);

console.log(
"%cFounder Command Center Loaded",
"color:#00e0ff;font-size:12px;"
);
