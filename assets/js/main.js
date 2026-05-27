// =========================================
// Syed Ali Hasan Moosavi Portfolio
// Phase 6 Main JavaScript
// =========================================

// Animated Founder Roles

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
document.getElementById("typing-text");

if (typingText) {

  let current = 0;

  typingText.textContent =
  roles[current];

  setInterval(() => {

    current++;

    if(current >= roles.length){
      current = 0;
    }

    typingText.style.opacity = "0";

    setTimeout(() => {

      typingText.textContent =
      roles[current];

      typingText.style.opacity = "1";

    },300);

  },2500);

}

// =========================================
// Mobile Menu
// =========================================

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

if(menuToggle && navLinks){

  menuToggle.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "show"
      );

    }
  );

}

// Close Menu After Click

document
.querySelectorAll("#navLinks a")
.forEach(link => {

  link.addEventListener(
    "click",
    () => {

      navLinks.classList.remove(
        "show"
      );

    }
  );

});

// =========================================
// Animated Counters
// =========================================

const counters =
document.querySelectorAll(".counter");

function runCounter(counter){

  const target =
  Number(
    counter.dataset.target
  );

  let value = 0;

  const increment =
  target / 100;

  function update(){

    value += increment;

    if(value < target){

      counter.innerText =
      Math.floor(value);

      requestAnimationFrame(update);

    }else{

      counter.innerText =
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

runCounter(entry.target);

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

// =========================================
// Scroll Reveal Animation
// =========================================

const revealItems =
document.querySelectorAll(
".card,.section-header"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{
threshold:.1
}

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(40px)";

item.style.transition=
"all .8s ease";

revealObserver.observe(item);

});

// =========================================
// Navbar Scroll Effect
// =========================================

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(!navbar) return;

if(window.scrollY > 50){

navbar.style.background=
"rgba(5,8,22,.95)";

navbar.style.boxShadow=
"0 10px 40px rgba(0,0,0,.4)";

}else{

navbar.style.background=
"rgba(5,8,22,.75)";

navbar.style.boxShadow=
"none";

}

}
);

// =========================================
// Smooth Anchor Scrolling
// =========================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
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

// =========================================
// Particle Background Engine
// =========================================

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
(Math.random() - 0.5) * 0.5;

this.speedY =
(Math.random() - 0.5) * 0.5;

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
Math.PI * 2
);

ctx.fillStyle =
"rgba(91,140,255,.4)";

ctx.fill();

}

}

function initParticles(){

particles = [];

for(let i=0;i<120;i++){

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
dx * dx + dy * dy;

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

// =========================================
// Console Signature
// =========================================

console.log(
"%cSyed Ali Hasan Moosavi Portfolio Loaded",
"color:#5b8cff;font-size:14px;font-weight:bold;"
);
