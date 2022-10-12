const $navContainer = document.querySelector(".nav-container");
const body = document.querySelector("body");

if (document.title.toLowerCase().indexOf("introduction") === -1) {
  // main 페이지 nav

  const $mainBannerSectionContainer = document.querySelector(
    ".main-banner-section-container"
  );

  $(window).scroll(function () {
    if ($(document).scrollTop() > 120) {
      $navContainer.classList.add("scroll-down-main");
      $mainBannerSectionContainer.classList.add("hide");
    } else {
      $navContainer.classList.remove("scroll-down-main");
      $mainBannerSectionContainer.classList.remove("hide");
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $(".update-info-container").fadeOut();
    } else {
      $(".update-info-container").fadeIn();
    }
  });

  // 업데이트 정보 nav 플로팅
  const $navListContainer = document.querySelector(".nav-list-container");
  const $LastUpdated = $navListContainer.querySelector(".last-updated");
  const $exbCount = $navListContainer.querySelector(".exb-count");
  let today = new Date();
  $LastUpdated.textContent =
    "Last Updated on " +
    today.getFullYear() +
    ". " +
    `${today.getMonth() + 1}` +
    ". " +
    today.getDate();
  $exbCount.textContent =
    document.querySelectorAll(".main-card-container").length + " Exhibitions";

  const $updateSpinnerIcon = document.querySelector(".update-spinner i");
  // let randomNum = Math.floor(Math.random() * 15);
  setTimeout(() => {
    $updateSpinnerIcon.classList.remove("fa-circle-notch");
    $updateSpinnerIcon.classList.add("fa-check");
    $updateSpinnerIcon.classList.add("update-completed");
  }, Math.floor(Math.random() * 20) * 1000 + 15000);
} else if (document.title.toLowerCase().indexOf("main") === -1) {
  // intro 페이지 nav
}
