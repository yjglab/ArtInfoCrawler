import "../scss/layout.scss";

function initHeader() {
  let tl = gsap.timeline({ delay: 1 });

  tl.from(".logo", {
    y: -40,
    opacity: 0,
    duration: 2,
    ease: "power4",
  })
    .from(
      ".nav-btn__svg rect",
      {
        scale: 0,
        transformOrigin: "center right",
        duration: 0.6,
        ease: "power4",
        stagger: 0.1,
      },
      0.6
    )
    .to(
      ".nav-rect",
      {
        scale: 0.8,
        transformOrigin: "center left",
        duration: 0.4,
        ease: "power2",
        stagger: 0.1,
      },
      "-=0.6"
    );

  let navBtn = document.querySelector(".nav-btn");

  navBtn.addEventListener("mouseover", (e) => {
    gsap.to(".nav-rect", {
      scaleX: 1,
      transformOrigin: "top left",
      duration: 0.4,
      ease: "power4",
    });
  });

  navBtn.addEventListener("mouseout", (e) => {
    gsap.to(".nav-rect", {
      scaleX: 0.8,
      transformOrigin: "top left",
      duration: 0.6,
      ease: "power4",
    });
  });
}
initHeader();
