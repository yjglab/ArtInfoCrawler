gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let offset = 0;
// const cols = gsap.utils.toArray(".mainSection__col");
let anim;

const $$mainSectionCols = document.querySelectorAll(".mainSection__col");
$$mainSectionCols.forEach((col, i) => {
  const cards = col.childNodes;

  cards.forEach((card) => {
    // clone
    let clone = card.cloneNode(true);
    col.appendChild(clone);
    //
    document.querySelectorAll(".mainSection__card-inner").forEach((v) =>
      v.addEventListener("click", () => {
        v.classList.add("flipped");
      })
    );
  });

  cards.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-=";

    anim = gsap
      .to(item, {
        y: direction + Number(columnHeight / 2),
        duration: 480, // 20
        repeat: Infinity,
        ease: Power0.easeInOut, // Power2.easeInOut
        modifiers: {
          y: gsap.utils.unitize((y) => {
            if (direction == "+=") {
              offset += additionalY.val;
              y = (parseFloat(y) - offset) % (columnHeight * 0.5);
            } else {
              offset += additionalY.val;
              y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
            }

            return y;
          }),
        },
      })
      .timeScale(2);

    animPlayToggle(anim);
    // change(anim);
  });
});

function removeAllFlipped() {
  document.querySelectorAll(".mainSection__card-inner").forEach((v) => {
    if (v.classList.contains("flipped")) v.classList.remove("flipped");
  });
}

// function change(anim) {
//   document.querySelector(".toggle-gallery").addEventListener("click", () => {
//     gsap.to(anim, {
//       timeScale: 300,

//     });
//     setTimeout(() => {
//       gsap.to(anim, {
//         timeScale: 2,

//       });
//     }, 500);
//   });
// }
function animPlayToggle(anim) {
  const $$mainSectionCols = document.querySelectorAll(".mainSection__col");
  let clickFlag = false;
  $$mainSectionCols.forEach((v) =>
    ["click", "wheel"].forEach((e) => {
      v.addEventListener(e, () => {
        if (clickFlag) {
          anim.play();
          gsap.to(anim, {
            timeScale: 2,
            duration: 1,
            overwrite: true,
          });
          removeAllFlipped();
          clickFlag = false;
        } else {
          if (e !== "wheel") {
            // 휠은 멈추게 하지 않음
            gsap.to(anim, {
              timeScale: 0,
              duration: 1,
              overwrite: true,
              onComplete() {
                anim.pause();
              },
            });
            clickFlag = true;
          }
        }
      });
    })
  );
}

let additionalYAnim;
const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: ".mainSection__header",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  },
});

const imges = document.querySelectorAll(".frontImg");
imges.forEach((v) =>
  v.addEventListener("error", function handleError() {
    // console.log(v.src);
    v.parentNode.parentNode.parentNode.remove();
    return;
  })
);

// setInterval(() => {
//   document
//     .querySelectorAll(".mainSection__col:nth-of-type(odd)")
//     .forEach((col) =>
//       col.childNodes.forEach((card) => {
//         let y = window.pageYOffset + card.getBoundingClientRect().top;
//         if (y < -480) {
//           card.style.visibility = "hidden";
//         } else if (y < -300 && y >= -480) {
//           card.style.opacity = 0;
//         } else {
//           card.style.visibility = "visible";
//           card.style.opacity = 1;
//         }
//       })
//     );

//   document
//     .querySelectorAll(".mainSection__col:nth-of-type(even)")
//     .forEach((col) =>
//       col.childNodes.forEach((card) => {
//         let y = window.pageYOffset + card.getBoundingClientRect().top;
//         if (y >= 950) {
//           // 4730
//           card.style.visibility = "hidden";
//         } else if (y < 950 && y >= 820) {
//           // 4730 4600
//           card.style.opacity = 0;
//         } else {
//           card.style.visibility = "visible";
//           card.style.opacity = 1;
//         }
//       })
//     );
// }, 1000);

function mousemove(event) {
  console.log(
    "pageX: ",
    event.pageX,
    "pageY: ",
    event.pageY,
    "clientX: ",
    event.clientX,
    "clientY:",
    event.clientY
  );
}

window.addEventListener("click", mousemove);
