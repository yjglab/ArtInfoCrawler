window.scrollTo(0, 0);

const mainTransition = "cubic-bezier(0.51, 0.08, 0.03, 0.99)";
const dark = "#242424";

const $navContainer = document.querySelector(".nav-container");
$navContainer.style.color = dark;

$navContainer.querySelector(".nav-list-container").style.display = "none";
document.querySelector(".filter-container").style.display = "none";

const $introDeviceContainer = document.querySelector(".intro-device-container");
const $introDevice = document.querySelector(".intro-device");

const $introTextP = document.querySelector(".intro-text p");

const scene1Value = 300;
const scene2Value = 1500;
const scene3Value = 3000;
const scene4Value = 4500;

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
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  const scrollValue = window.scrollY;
  // 첫 상태
  if (scrollValue < scene1Value) {
    $navContainer.style.color = dark;
    $introTextP.className = "";
    document.querySelector("main").style.backgroundColor = "white";
    if (scene1Flag)
      $introDeviceContainer.style.animation = `show-down 0.5s ${mainTransition} forwards`;
  }
  // 씬1
  if (scrollValue > scene1Value && scrollValue < scene2Value) {
    scene1Flag = true;
    if (!$videoSource.src.includes("intro-01")) {
      videoLoadPlay("/static/videos/intro-01.mp4");
    }
    document.querySelector("main").style.backgroundColor = dark;
    $navContainer.style.color = "white";
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
  if (scrollValue > scene4Value) {
    if (!$videoSource.src.includes("intro-04")) {
      videoLoadPlay("/static/videos/intro-04.mp4");
    }
    $introTextP.className = "scene-4";
    $introDevice.className = "intro-device scene-4";
    $introDeviceContainer.className = "intro-device-container scene-4";
  }
});

/*Only needed for the controls*/

/*View*/
// function updateView(view) {
//   if (view) {
//     phone.className = "phone view_" + view;
//   }
// }

// document.querySelector(".views").addEventListener("click", function (e) {
//   updateView(e.target.value);
// });

/*Controls*/
// function updateIframe() {
//   iframe.src = document.getElementById("iframeURL").value;

//   phone.style.width = document.getElementById("iframeWidth").value + "px";
//   phone.style.height = document.getElementById("iframeHeight").value + "px";

//   /*Idea by /u/aerosole*/
//   //   document.getElementById("wrapper").style.perspective =
//   //     document.getElementById("iframePerspective").checked ? "1000px" : "none";
// }
// updateIframe();

/*Events*/
// document.getElementById("controls").addEventListener("change", function () {
//   updateIframe();
// });
