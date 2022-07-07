gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
// console.clear();

select = (e) => document.querySelector(e);
selectAll = (e) => document.querySelectorAll(e);

const stage = select(".stage");
const slides = selectAll(".slide");
const links = selectAll(".slide__scroll-link");
const titles = selectAll(".col__content-title");

let slideID = 0;

function initIntro() {
  let tl = gsap.timeline({ delay: 1.2 });

  tl.from(".intro-line", {
    // x: 100,
    y: 400,
    ease: "power4",
    duration: 3,
  })
    .from(
      ".intro__txt",
      {
        x: -100,
        opacity: 0,
        ease: "power4",
        duration: 3,
      },
      0.7
    )
    .from(
      ".intro__img--1",
      {
        // x: -50,
        y: 50,
        opacity: 0,
        ease: "power2",
        duration: 5,
      },
      1
    )
    .from(
      ".intro__img--2",
      {
        // x: 50,
        y: -50,
        opacity: 0,
        ease: "power2",
        duration: 5,
      },
      1
    );

  let stl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      scrub: 1,
      start: "top bottom",
      end: "bottom top",
    },
  });

  stl
    .to(".intro__title", {
      x: 400,
      ease: "power4.in",
      duration: 3,
      opacity: 0,
    })
    .to(
      ".intro__txt",
      {
        y: 100,
        ease: "power4.in",
        duration: 3,
      },
      0
    );
}

function initLinks() {
  links.forEach((link, index, e) => {
    let linkST = link.querySelector(".slide__scroll-line");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: "#slide-" + (index + 2),
        },
        ease: "power2.inOut",
      });
      slideID++;
    });

    link.addEventListener("mouseover", (e) => {
      gsap.to(linkST, {
        y: 40,
        scaleY: 0.3,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4",
        opacity: 0,
      });
    });

    link.addEventListener("mouseout", (e) => {
      gsap.to(linkST, {
        y: 0,
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4",
        opacity: 1,
      });
    });
  });

  let top = select(".footer__link-top");

  top.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTop();
  });

  top.addEventListener("mouseover", (e) => {
    gsap.to(".footer__link-top-line", {
      scaleY: 3,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power4",
    });
  });

  top.addEventListener("mouseout", (e) => {
    gsap.to(".footer__link-top-line", {
      scaleY: 1,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power4",
    });
  });

  //

  let slideLinks = selectAll(".slide-link");

  slideLinks.forEach((slideLink, index, e) => {
    let slideL = slideLink.querySelector(".slide-link__line");

    slideLink.addEventListener("mouseover", (e) => {
      gsap.to(slideL, {
        x: 20,
        scaleX: 0.3,
        transformOrigin: "right center",
        duration: 0.8,
        opacity: 0,
        ease: "power4",
      });
    });
    slideLink.addEventListener("mouseout", (e) => {
      gsap.to(slideL, {
        x: 0,
        scaleX: 1,
        transformOrigin: "right center",
        duration: 0.8,
        opacity: 1,
        ease: "power4",
      });
    });
  });
}

function initSlides() {
  slides.forEach((slide, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "40% 50%",
      },
    });

    tl.from(slide.querySelectorAll(".col__content-title"), {
      ease: "power4",
      y: "+=5vh",
      duration: 2.5,
    })
      .from(
        slide.querySelectorAll(".line__inner"),
        {
          y: 100,
          duration: 3,
          ease: "power3",
          stagger: 0.1,
        },
        0
      )
      .from(
        slide.querySelectorAll(".col__content-txt"),
        {
          x: 100,
          y: 50,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0.4
      )
      .from(
        slide.querySelectorAll(".slide-link"),
        {
          x: -100,
          y: 100,
          opacity: 0,
          duration: 2,
          ease: "power4",
        },
        0.3
      )
      .from(
        slide.querySelectorAll(".slide__scroll-link"),
        {
          y: 200,
          duration: 3,
          ease: "power4",
        },
        0.4
      )
      .to(
        slide.querySelectorAll(".slide__scroll-line"),
        {
          scaleY: 1, // 0.6
          transformOrigin: "bottom left",
          duration: 2.5,
          ease: "elastic(1,0.5)",
        },
        1.4
      );
  });

  //

  gsap.from(".footer__link", {
    scrollTrigger: {
      trigger: ".footer",
      scrub: 2,
      start: "50% 100%",
      end: "0% 0%",
    },
    y: "20vh",
    ease: "sine",
  });
}

function initParallax() {
  slides.forEach((slide, i) => {
    let imageWrappers = slide.querySelectorAll(".col__image-wrap");

    gsap.fromTo(
      imageWrappers,
      {
        y: "-30vh",
      },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: slide,
          scrub: true,
          start: "top bottom",
          snap: {
            snapTo: 0.5,
            duration: 1,
            ease: "power4.inOut",
          },
        },
        ease: "none",
      }
    );
  });
}

function scrollTop() {
  gsap.to(window, {
    duration: 2,
    scrollTo: {
      y: "#slide-0",
    },
    ease: "power2.inOut",
  });
  gsap.to(".footer__link-top-line", {
    scaleY: 1,
    transformOrigin: "bottom center",
    duration: 0.6,
    ease: "power4",
  });
}

function initKeys() {
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (event.keyCode == 40) {
      //down arrow to next slide
      if (slideID <= slides.length) {
        slideID++;
        gsap.to(window, {
          duration: 2,
          scrollTo: {
            y: "#slide-" + slideID,
          },
          ease: "power2.inOut",
        });
      }
    } else if (event.keyCode == 38) {
      // up arrow to top
      slideID = 0;
      scrollTop();
    }
  });
}

function init() {
  gsap.set(stage, { autoAlpha: 1 });

  initIntro();
  initLinks();
  initSlides();
  initParallax();
  initKeys();
}

window.onload = () => {
  init();
};
