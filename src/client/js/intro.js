window.scrollTo(0, 0);

(function importAllVideos() {
  const r = require.context("../videos", false, /\.(mp4)$/);
  return r.keys().map(r);
})();

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

const scene1Value = 300;
const scene2Value = 1500;
const scene3Value = 3000;
const scene4Value = 4500;
const scene5Value = 6000;
const scene6Value = 7500;
const scene7Value = 9000;

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
  location.href = "/main";
};

const $mainLogoSpans = document.querySelectorAll(".main-logo span");
$mainLogoSpans.forEach((v) => (v.style.color = dark));

const $introText = document.querySelector(".intro-text");
const $introTextContent = $introText.querySelector("p");
let $introTextContentTopValue = 10; // px
let before = 0;

const sceneIntroTextFlag = [
  { sceneNum: 1, value: false },
  { sceneNum: 2, value: false },
  { sceneNum: 3, value: false },
  { sceneNum: 4, value: false },
  { sceneNum: 5, value: false },
  { sceneNum: 6, value: false },
  { sceneNum: 7, value: false },
];

function handleSceneIntroText(n, scrollValue) {
  sceneIntroTextFlag.forEach((v) => {
    if (v.sceneNum !== n) {
      v.value = false;
    }
  });
  if (!sceneIntroTextFlag[n - 1].value) {
    sceneIntroTextFlag[n - 1].value = true;
    $introTextContentTopValue = 0;
  }
  if (before < scrollValue) {
    $introTextContentTopValue -= 1;
  } else {
    $introTextContentTopValue += 1;
  }
  $introTextContent.style.top = `${$introTextContentTopValue}px`;
  if (n !== 6 && n !== 7) {
    $introDeviceContainer.style.top = `${$introTextContentTopValue}px`;
  } else {
    $introDeviceContainer.style.top = "20px";
  }
  before = scrollValue;
}
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;

  // 첫 상태
  if (scrollValue < scene1Value) {
    $introTextContentTopValue = 0;

    $navContainer.style.color = dark;
    $mainLogoSpans.forEach((v) => (v.style.color = dark));

    $introText.className = "intro-text";
    $introTextContent.textContent = "";
    document.querySelector("main").style.backgroundColor = "white";
    $introMarqueeBlockContainerSideblur.className =
      "intro-marquee-block-container-sideblur white-blur";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
    if (scene1Flag)
      $introDeviceContainer.style.animation = `show-down 0.5s ${mainTransition} forwards`;
  }
  // 씬1
  if (scrollValue > scene1Value && scrollValue < scene2Value) {
    handleSceneIntroText(1, scrollValue);
    $mainLogoSpans.forEach((v) => (v.style.color = "white"));

    scene1Flag = true;
    $navContainer.style.color = "white";

    if (!$videoSource.src.includes("intro-01")) {
      videoLoadPlay("/static/videos/intro-01.mp4");
    }
    document.querySelector("main").style.backgroundColor = dark;
    $introMarqueeBlockContainerSideblur.className =
      "intro-marquee-block-container-sideblur dark-blur";
    $introText.className = "intro-text scene-1";
    $introTextContent.textContent =
      "Check out the recently updated exhibitions right away.";
    $introDevice.className = "intro-device scene-1";
    $introDeviceContainer.style.animation = `show-up 1.3s ${mainTransition} forwards`;
    $introDeviceContainer.className = "intro-device-container scene-1";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬2
  if (scrollValue > scene2Value && scrollValue < scene3Value) {
    handleSceneIntroText(2, scrollValue);

    if (!$videoSource.src.includes("intro-02")) {
      videoLoadPlay("/static/videos/intro-02.mp4");
    }
    $introText.className = "intro-text scene-2";
    $introTextContent.textContent =
      "You can view the exhibitions you want to see anytime, anywhere.";
    $introDevice.className = "intro-device scene-2";
    $introDeviceContainer.className = "intro-device-container scene-2";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬3
  if (scrollValue > scene3Value && scrollValue < scene4Value) {
    handleSceneIntroText(3, scrollValue);

    if (!$videoSource.src.includes("intro-03")) {
      videoLoadPlay("/static/videos/intro-03.mp4");
    }
    $introText.className = "intro-text scene-3";
    $introTextContent.textContent =
      "Sort your favorite exhibits using the dynamic category filter.";
    $introDevice.className = "intro-device scene-3";
    $introDeviceContainer.className = "intro-device-container scene-3";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬4
  if (scrollValue > scene4Value && scrollValue < scene5Value) {
    handleSceneIntroText(4, scrollValue);

    if (!$videoSource.src.includes("intro-04")) {
      videoLoadPlay("/static/videos/intro-04.mp4");
    }
    $introText.className = "intro-text scene-4";
    $introTextContent.textContent =
      "Get more detailed exhibition filtering with dynamic search filters.";
    $introDevice.className = "intro-device scene-4";
    $introDeviceContainer.className = "intro-device-container scene-4";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬5
  if (scrollValue > scene5Value && scrollValue < scene6Value) {
    handleSceneIntroText(5, scrollValue);

    $introText.className = "intro-text scene-5";
    $introTextContent.textContent =
      "You can get exhibition information in an optimal environment from any device.";
    $introDevice.className = "intro-device scene-5";
    $introDeviceContainer.className = "intro-device-container scene-5";
    $introDeviceContainer.removeEventListener("click", getStartedMove);
  }
  // 씬6
  if (scrollValue > scene6Value && scrollValue < scene7Value) {
    handleSceneIntroText(6, scrollValue);

    $introText.className = "intro-text scene-6";
    $introTextContent.textContent = "Get Started";
    $introDevice.className = "intro-device scene-6";
    $introDeviceContainer.className = "intro-device-container scene-6";
    $introDeviceContainer.addEventListener("click", getStartedMove);
  }
  // 씬7
  const $introMarqueeContainer = document.querySelector(
    ".intro-marquee-container"
  );
  if (scrollValue > scene7Value) {
    handleSceneIntroText(7, scrollValue);

    $introText.className = "scene-7";

    $introDeviceContainer.className = "intro-device-container scene-7";
    $introMarqueeContainer.style.opacity = 0.08;
  } else {
    $introMarqueeContainer.style.opacity = 1;
  }
});
