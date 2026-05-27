// =====================================================
// Syed Ali Hasan Moosavi Portfolio
// Main JavaScript
// =====================================================

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

const roleElement =
document.getElementById("typing-text");

if (roleElement) {

  let currentRole = 0;

  roleElement.textContent =
    roles[currentRole];

  setInterval(() => {

    currentRole++;

    if (currentRole >= roles.length) {
      currentRole = 0;
    }

    roleElement.style.opacity = "0";

    setTimeout(() => {

      roleElement.textContent =
        roles[currentRole];

      roleElement.style.opacity = "1";

    }, 300);

  }, 2500);

}

// =====================================================
// Mobile Menu
// =====================================================

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "show"
      );

    }
  );

}

// Close mobile menu after click

const navItems =
document.querySelectorAll(
  "#navLinks a"
);

navItems.forEach(item => {

  item.addEventListener(
    "click",
    () => {

      if (navLinks) {
        navLinks.classList.remove(
          "show"
        );
      }

    }
  );

});

// =====================================================
// Counter Animation
// =====================================================

const counters =
document.querySelectorAll(
  ".counter"
);

function animateCounter(counter) {

  const target =
    parseInt(
      counter.getAttribute(
        "data-target"
      )
    );

  let count = 0;

  const increment =
    target / 100;

  function update() {

    count += increment;

    if (count < target) {

      counter.innerText =
        Math.floor(count);

      requestAnimationFrame(
        update
      );

    } else {

      counter.innerText =
        target;

    }

  }

  update();

}

const counterObserver =
new IntersectionObserver(

(entries) => {

  entries.forEach(entry => {

    if (
      entry.isIntersecting
    ) {

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
  threshold: 0.4
}

);

counters.forEach(counter => {

  counterObserver.observe(
    counter
  );

});

// =====================================================
// Scroll Reveal Animation
// =====================================================

const revealElements =
document.querySelectorAll(
  ".card, .section-header"
);

const revealObserver =
new IntersectionObserver(

(entries) => {

  entries.forEach(entry => {

    if (
      entry.isIntersecting
    ) {

      entry.target.style.opacity =
        "1";

      entry.target.style.transform =
        "translateY(0)";

    }

  });

},

{
  threshold: 0.15
}

);

revealElements.forEach(item => {

  item.style.opacity = "0";

  item.style.transform =
    "translateY(40px)";

  item.style.transition =
    "all .8s ease";

  revealObserver.observe(item);

});

// =====================================================
// Navbar Background on Scroll
// =====================================================

const navbar =
document.querySelector(
  ".navbar"
);

window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;

    if (
      window.scrollY > 50
    ) {

      navbar.style.background =
        "rgba(5,8,22,.95)";

      navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    } else {

      navbar.style.background =
        "rgba(5,8,22,.75)";

      navbar.style.boxShadow =
        "none";

    }

  }
);

// =====================================================
// Smooth Internal Navigation
// =====================================================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

  anchor.addEventListener(
    "click",
    function(e) {

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

// =====================================================
// Console Signature
// =====================================================

console.log(
"%cSyed Ali Hasan Moosavi Portfolio Loaded",
"color:#5b8cff;font-size:14px;font-weight:bold;"
);
