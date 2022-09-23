window.scrollTo(0, 0);

const mainTransition = "cubic-bezier(0.51, 0.08, 0.03, 0.99)";
const dark = "#242424"; //rgb(36, 36, 36)

const $navContainer = document.querySelector(".nav-container");
$navContainer.style.color = dark;

$navContainer.querySelector(".nav-list-container").style.display = "none";
document.querySelector(".filter-container").style.display = "none";

const $introDeviceContainer = document.querySelector(".intro-device-container");
const $introDevice = document.querySelector(".intro-device");

const $introTextP = document.querySelector(".intro-text p");

const scene1Value = 400;
const scene2Value = 1500;
const scene3Value = 3500;
const scene4Value = 5500;
const scene5Value = 7500;
const scene6Value = 10500;

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
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  const scrollValue = window.scrollY;
  // 첫 상태
  if (scrollValue < scene1Value) {
    $navContainer.style.color = dark;
    $introTextP.className = "";
    document.querySelector("main").style.backgroundColor = "white";
    document.querySelector(
      ".intro-marquee-block-container-sideblur"
    ).style.boxShadow = "inset 0px 0px 40px 140px white";
    if (scene1Flag)
      $introDeviceContainer.style.animation = `show-down 0.5s ${mainTransition} forwards`;
  }
  // 씬1
  if (scrollValue > scene1Value && scrollValue < scene2Value) {
    scene1Flag = true;
    $navContainer.style.color = "white";

    // if (!alertFlag) {
    //   setTimeout(() => {
    //     alert(
    //       "!알림!: 인트로 페이지는 현재 제작중인 페이지입니다. 전시를 바로 확인하시고 싶은 분이시라면 좌측 상단의 MAIN버튼을 클릭하여 메인 페이지로 이동해주세요!"
    //     );
    //   }, 2000);
    //   alertFlag = true;
    // }
    if (!$videoSource.src.includes("intro-01")) {
      videoLoadPlay("/static/videos/intro-01.mp4");
    }
    document.querySelector("main").style.backgroundColor = dark;
    document.querySelector(
      ".intro-marquee-block-container-sideblur"
    ).style.boxShadow = `inset 0px 0px 40px 140px ${dark}`;
    $introTextP.className = "scene-1";
    $introDevice.className = "intro-device scene-1";
    $introDeviceContainer.style.animation = `show-up 1.3s ${mainTransition} forwards`;
    $introDeviceContainer.className = "intro-device-container scene-1";
  }
  // 씬2
  if (scrollValue > scene2Value && scrollValue < scene3Value) {
    if (!$videoSource.src.includes("intro-02")) {
      videoLoadPlay("/static/videos/intro-02.mp4");
    }
    $introTextP.className = "scene-2";
    $introDevice.className = "intro-device scene-2";
    $introDeviceContainer.className = "intro-device-container scene-2";
  }
  // 씬3
  if (scrollValue > scene3Value && scrollValue < scene4Value) {
    if (!$videoSource.src.includes("intro-03")) {
      videoLoadPlay("/static/videos/intro-03.mp4");
    }
    $introTextP.className = "scene-3";
    $introDevice.className = "intro-device scene-3";
    $introDeviceContainer.className = "intro-device-container scene-3";
  }
  // 씬4
  if (scrollValue > scene4Value && scrollValue < scene5Value) {
    if (!$videoSource.src.includes("intro-04")) {
      videoLoadPlay("/static/videos/intro-04.mp4");
    }
    $introTextP.className = "scene-4";
    $introDevice.className = "intro-device scene-4";
    $introDeviceContainer.className = "intro-device-container scene-4";
  }
  // 씬5
  if (scrollValue > scene5Value && scrollValue < scene6Value) {
    // if (!$videoSource.src.includes("intro-04")) {
    //   videoLoadPlay("/static/videos/intro-04.mp4");
    // }
    $introTextP.className = "scene-5";
    $introDevice.className = "intro-device scene-5";
    $introDeviceContainer.className = "intro-device-container scene-5";
  }
  //씬6
  if (scrollValue > scene6Value) {
    // if (!$videoSource.src.includes("intro-04")) {
    //   videoLoadPlay("/static/videos/intro-04.mp4");
    // }
    $introTextP.className = "scene-6";
    $introDevice.className = "intro-device scene-6";
    $introDeviceContainer.className = "intro-device-container scene-6";
  }
});
