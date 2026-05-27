/* ======================================================
   MOBILE MENU
====================================================== */

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

if(menuToggle){

menuToggle.addEventListener(
"click",
()=>{

navLinks.classList.toggle("active");

});

}

/* ======================================================
   TYPING EFFECT
====================================================== */

const typingText =
document.getElementById("typing-text");

const roles = [

"Founder & Managing Director",

"Software Architect",

"AI Product Builder",

"Technology Strategist",

"Enterprise Ecosystem Builder",

"Innovation Leader"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

if(!typingText) return;

const currentRole =
roles[roleIndex];

if(!deleting){

typingText.textContent =
currentRole.substring(0,charIndex++);

if(charIndex >
currentRole.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingText.textContent =
currentRole.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

roleIndex =
(roleIndex + 1)
% roles.length;

}

}

setTimeout(
typeEffect,
deleting ? 45 : 90
);

}

typeEffect();

/* ======================================================
   PARTICLE SYSTEM
====================================================== */

const canvas =
document.getElementById("particles");

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

let particles = [];

const particleCount =
window.innerWidth < 768
? 35
: 70;

for(let i=0;i<particleCount;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-.5)*0.5,
dy:(Math.random()-.5)*0.5

});

}

function animateParticles(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle =
"rgba(91,140,255,.7)";

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fill();

p.x += p.dx;
p.y += p.dy;

if(
p.x < 0 ||
p.x > canvas.width
) p.dx *= -1;

if(
p.y < 0 ||
p.y > canvas.height
) p.dy *= -1;

});

requestAnimationFrame(
animateParticles
);

}

animateParticles();

window.addEventListener(
"resize",
()=>{

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

});

}

/* ======================================================
   CURSOR GLOW
====================================================== */

const glow =
document.createElement("div");

glow.classList.add(
"cursor-glow"
);

document.body.appendChild(glow);

let ticking = false;

document.addEventListener(
"mousemove",
e=>{

if(ticking) return;

window.requestAnimationFrame(()=>{

ticking = false;

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

});

ticking = true;

}
);

/* ======================================================
   REVEAL ON SCROLL
====================================================== */

const revealElements =
document.querySelectorAll(

".dashboard-panel,\
.command-card,\
.ecosystem-node,\
.intelligence-block,\
.timeline-card,\
.roadmap-node,\
.architecture-item,\
.infrastructure-box"

);

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"reveal",
"active"
);

}

});

},

{
threshold:0.05,
rootMargin:"0px 0px -50px 0px"
}

);

revealElements.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});

/* ======================================================
   PARALLAX MOTION
====================================================== */

let ticking = false;

document.addEventListener(
"mousemove",
e=>{

if(ticking) return;

window.requestAnimationFrame(()=>{

ticking = false;

const x =
(e.clientX / window.innerWidth - .5);

const y =
(e.clientY / window.innerHeight - .5);

document.querySelectorAll(
".orb"
).forEach((orb,index)=>{

const speed =
(index + 1) * 30;

orb.style.transform =

`translate(
${x * speed}px,
${y * speed}px
)`;

});

});

ticking = true;

}
);

/* ======================================================
   FLOATING EFFECTS
====================================================== */

document.querySelectorAll(
".metric-widget,\
.core-node,\
.dashboard-panel"
).forEach(el=>{

el.classList.add(
"float-element"
);

});

/* ======================================================
   PREMIUM HOVER PHYSICS
====================================================== */

document.querySelectorAll(
".dashboard-panel,\
.command-card,\
.architecture-item,\
.ecosystem-node"
).forEach(card=>{

card.classList.add(
"physics-hover"
);

});

/* ======================================================
   DYNAMIC YEAR
====================================================== */

const year =
new Date().getFullYear();

document.querySelectorAll(
"footer p:first-child"
).forEach(el=>{

el.innerHTML =
`© ${year} Syed Ali Hasan Moosavi`;

});
