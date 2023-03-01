"use strict";

var $navContainer = document.querySelector(".nav-container");
var body = document.querySelector("body");

if (document.title.toLowerCase().indexOf("introduction") === -1) {
  // main 페이지 nav
  var $mainBannerSectionContainer = document.querySelector(".main-banner-section-container");
  $(window).scroll(function () {
    if ($(document).scrollTop() > 120) {
      if (!$navContainer.classList.contains("filter-clicked")) {
        $navContainer.classList.add("scroll-down-main");
      }

      $mainBannerSectionContainer.classList.add("hide");
    } else {
      $navContainer.classList.remove("scroll-down-main");
      $mainBannerSectionContainer.classList.remove("hide");
    }
  }); // 업데이트 정보 nav 플로팅

  var $navUpdateChecker = document.querySelector(".nav-update-checker");
  var $LastUpdated = $navUpdateChecker.querySelector(".last-updated");
  var $exbCount = $navUpdateChecker.querySelector(".exb-count");
  var today = new Date();
  $LastUpdated.textContent = "Last Updated on " + today.getFullYear() + ". " + "".concat(today.getMonth() + 1) + ". " + today.getDate();
  $exbCount.textContent = document.querySelectorAll(".main-card-container").length + " Exhibitions";
  var $updateSpinnerIcon = document.querySelector(".update-spinner i"); // let randomNum = Math.floor(Math.random() * 15);

  setTimeout(function () {
    $updateSpinnerIcon.classList.remove("fa-circle-notch");
    $updateSpinnerIcon.classList.add("fa-check");
    $updateSpinnerIcon.classList.add("update-completed");
    setTimeout(function () {
      $navUpdateChecker.style.opacity = 0;
    }, 2000);
  }, Math.floor(Math.random() * 7) * 1000 + 0); // *20, +15000
} else if (document.title.toLowerCase().indexOf("main") === -1) {// intro 페이지 nav
}