gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".mainSection__col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  images.forEach((item, itemIdx) => {
    let columnHeight = item.parentElement.clientHeight;
    console.log(columnHeight);
    let direction = i % 2 !== 0 ? "+=" : "-=";

    const anim = gsap
      .to(item, {
        y: direction + Number(columnHeight / 2),
        duration: 20, // 20
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

    const $$mainSectionCols = document.querySelectorAll(".mainSection__col");
    let clickFlag = false;
    $$mainSectionCols.forEach((v) =>
      v.addEventListener("click", () => {
        if (clickFlag) {
          anim.play();
          gsap.to(anim, {
            timeScale: 2,
            duration: 1,
            overwrite: true,
          });
          clickFlag = false;
        } else {
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
      })
    );
  });
});

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
