(function importAllVideos() {
  const r = require.context("../videos", false, /\.(mp4)$/);
  return r.keys().map(r);
})();

window.scrollTo(0, 0);

const mainTransition = "cubic-bezier(0.51, 0.08, 0.03, 0.99)";
const dark = "#242424"; //rgb(36, 36, 36)

const $navContainer = document.querySelector(".nav-container");
$navContainer.style.color = dark;
$navContainer.style.backgroundColor = "transparent";
$navContainer.querySelector(".nav-list-container").style.display = "none";
document.querySelector(".filter-container").style.display = "none";

const $introDeviceContainer = document.querySelector(".intro-device-container");
const $introDevice = document.querySelector(".intro-device");
const $introMarqueeBlockContainerSideblur = document.querySelector(
  ".intro-marquee-block-container-sideblur"
);
const $introTextP = document.querySelector(".intro-text p");

const scene1Value = 300;
const scene2Value = 3000;
const scene3Value = 5500;
const scene4Value = 8500;
const scene5Value = 11000;
const scene6Value = 13500;
const scene7Value = 15000;

const $video = document.querySelector(".intro-device video");
const $videoSource = $video.querySelector("source");

let scene1Flag = false;
let video1Flag = false;
let video2Flag = false;

function videoLoadPlay(src) {
  $videoSource.src = src;
  $video.load();
  let playPromise = $video.play();
  if (playPromise !== undefined) {
    playPromise.then((_) => {}).catch((err) => {});
  }
}

let alertFlag = false;
const getStartedMove = () => {
  console.log("cc");
  location.href = "/main";
};

const $mainLogoSpans = document.querySelectorAll(".main-logo span");
$mainLogoSpans.forEach((v) => (v.style.color = dark));

window.addEventListener("scroll", function () {
  // // intro scroll bar
  // const $introScrollBar = document.querySelector(".intro-scroll-bar");
  // const $barGuage = $introScrollBar.querySelector(".bar-guage");

  // // ...
  // // const scene1Value = 3
  // // const scene2Value = 30
  // // const scene3Value = 55
  // // const scene4Value = 85
  // // const scene5Value = 110
  // // const scene6Value = 135
  // // const scene7Value = 150
  // // ...

  // $barGuage.style.width += scrollValue;

  const scrollValue = window.scrollY;
  // 첫 상태
  if (scrollValue < scene1Value) {
    $navContainer.style.color = dark;
    $mainLogoSpans.forEach((v) => (v.style.color = dark));

    $introTextP.className = "";
    document.querySelector("main").style.backgroundColor = "white";
    $introMarqueeBlockContainerSideblur.className =
      "intro-marquee-block-container-sideblur white-blur";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
    if (scene1Flag)
      $introDeviceContainer.style.animation = `show-down 0.5s ${mainTransition} forwards`;
  }
  // 씬1
  if (scrollValue > scene1Value && scrollValue < scene2Value) {
    $mainLogoSpans.forEach((v) => (v.style.color = "white"));

    scene1Flag = true;
    $navContainer.style.color = "white";

    if (!$videoSource.src.includes("intro-01")) {
      videoLoadPlay("/static/videos/intro-01.mp4");
    }
    document.querySelector("main").style.backgroundColor = dark;
    $introMarqueeBlockContainerSideblur.className =
      "intro-marquee-block-container-sideblur dark-blur";
    $introTextP.className = "scene-1";
    $introDevice.className = "intro-device scene-1";
    $introDeviceContainer.style.animation = `show-up 1.3s ${mainTransition} forwards`;
    $introDeviceContainer.className = "intro-device-container scene-1";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬2
  if (scrollValue > scene2Value && scrollValue < scene3Value) {
    if (!$videoSource.src.includes("intro-02")) {
      videoLoadPlay("/static/videos/intro-02.mp4");
    }
    $introTextP.className = "scene-2";
    $introDevice.className = "intro-device scene-2";
    $introDeviceContainer.className = "intro-device-container scene-2";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬3
  if (scrollValue > scene3Value && scrollValue < scene4Value) {
    if (!$videoSource.src.includes("intro-03")) {
      videoLoadPlay("/static/videos/intro-03.mp4");
    }
    $introTextP.className = "scene-3";
    $introDevice.className = "intro-device scene-3";
    $introDeviceContainer.className = "intro-device-container scene-3";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬4
  if (scrollValue > scene4Value && scrollValue < scene5Value) {
    if (!$videoSource.src.includes("intro-04")) {
      videoLoadPlay("/static/videos/intro-04.mp4");
    }
    $introTextP.className = "scene-4";
    $introDevice.className = "intro-device scene-4";
    $introDeviceContainer.className = "intro-device-container scene-4";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬5
  if (scrollValue > scene5Value && scrollValue < scene6Value) {
    $introTextP.className = "scene-5";
    $introDevice.className = "intro-device scene-5";
    $introDeviceContainer.className = "intro-device-container scene-5";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬6

  if (scrollValue > scene6Value && scrollValue < scene7Value) {
    $introTextP.className = "scene-6";
    $introDevice.className = "intro-device scene-6";
    $introDeviceContainer.className = "intro-device-container scene-6";
    $introDeviceContainer.addEventListener("click", getStartedMove);
  }
  // 씬7
  const $introMarqueeContainer = document.querySelector(
    ".intro-marquee-container"
  );
  if (scrollValue > scene7Value) {
    $introTextP.className = "scene-7";

    $introDeviceContainer.className = "intro-device-container scene-7";
    $introMarqueeContainer.style.opacity = 0.08;
  } else {
    $introMarqueeContainer.style.opacity = 1;
  }
});
