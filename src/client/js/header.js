var tl = gsap.timeline({ paused: true });
function openNav() {
  animateOpenNav();
  var $navToggle = document.querySelector(".nav__btn--toggle");
  $navToggle.onclick = function (e) {
    tl.reversed(!tl.reversed());
    $navToggle.classList.toggle("active");
  };
}

function animateOpenNav() {
  var $navToggle = document.querySelector(".nav__btn--toggle");
  tl.to($navToggle, {
    duration: 0.1,
    ease: "power3",
    x: -95,
  });

  var $navToggle = document.querySelector(".nav__links");
  tl.to($navToggle, {
    duration: 0.2,
    ease: "power3",
    y: 0,
    boxShadow: "0px -5px 65px 40px rgba(0, 0, 0, 0.647)",
  })
    // .set("body", { overflow: "hidden" })
    .to(".nav__link", {
      opacity: 1,
      ease: "power3",
      y: 0,
      duration: 0.6,
      stagger: 0.1,
    })
    .reverse();
}

// init
openNav();
