const roles = [
"Founder",
"Software Architect",
"AI Product Builder",
"Entrepreneur",
"Technology Innovator",
"Business Strategist"
];

let index = 0;

const target =
document.getElementById(
"typing-text"
);

setInterval(() => {

index++;

if(index >= roles.length){
index = 0;
}

target.textContent =
roles[index];

},2000);
