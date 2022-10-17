"use strict";

if (document.title.toLowerCase().indexOf("main") === -1) {
  document
    .querySelectorAll(".nav__item-filter .nav__item-content-gridbox")
    .forEach(function (v) {
      return (v.style.display = "none");
    });
  document.querySelector(".nav__item-content-box.triple").style.height = "87px";
}

var $mainBannerSectionContainer = document.querySelector(
  ".main-banner-section-container"
);
var $filterContainerBackground = document.querySelector(".filter-container");
var $navContainer = document.querySelector(".nav-container");
var $filterSearchbar = document.querySelector(".filter-search-bar");
$(window).scroll(function () {
  if ($(document).scrollTop() > 120) {
    $mainBannerSectionContainer.classList.add("hide");
    $filterContainerBackground.classList.remove("hide");
    $navContainer.style.color = "black";
  } else {
    $mainBannerSectionContainer.classList.remove("hide");
    $filterContainerBackground.classList.add("hide");
    $navContainer.style.color = "white";
    $filterSearchbar.value = "";
    $(".main-card-mix-container").mixItUp("filter", "all");
    document
      .querySelectorAll(".filter-list-category .filter")
      .forEach(function (v) {
        if (v.classList.contains("option-all"))
          v.classList.add("option-clicked");
        else {
          v.classList.remove("option-clicked");
        }
      });
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $(".update-info-container").fadeOut();
  } else {
    $(".update-info-container").fadeIn();
  }
}); // 업데이트 정보 nav 플로팅

var $navListContainer = document.querySelector(".nav-list-container");
var $LastUpdated = $navListContainer.querySelector(".last-updated");
var $exbCount = $navListContainer.querySelector(".exb-count");
var today = new Date();
$LastUpdated.textContent =
  "Last Updated on " +
  today.getFullYear() +
  ". " +
  today.getMonth() +
  ". " +
  today.getDate();
$exbCount.textContent =
  document.querySelectorAll(".main-card-container").length + " Exibitions";
var $updateSpinnerIcon = document.querySelector(".update-spinner i"); // let randomNum = Math.floor(Math.random() * 15);

setTimeout(function () {
  $updateSpinnerIcon.classList.remove("fa-circle-notch");
  $updateSpinnerIcon.classList.add("fa-check");
  $updateSpinnerIcon.classList.add("update-completed");
}, Math.floor(Math.random() * 15) * 1000 + 10000);
