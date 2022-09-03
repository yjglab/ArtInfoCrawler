if (document.title.toLowerCase().indexOf("main") === -1) {
  document
    .querySelectorAll(".nav__item-filter .nav__item-content-gridbox")
    .forEach((v) => (v.style.display = "none"));
  document.querySelector(".nav__item-content-box.triple").style.height = "87px";
}

const $mainBannerSectionContainer = document.querySelector(
  ".main-banner-section-container"
);
const $filterContainerBackground = document.querySelector(".filter-container");
const $navContainer = document.querySelector(".nav-container");
$(window).scroll(function () {
  if ($(document).scrollTop() > 120) {
    $mainBannerSectionContainer.classList.add("hide");
    $filterContainerBackground.classList.remove("hide");
    $navContainer.style.color = "black";
    setTimeout(() => {
      const $updateSpinnerIcon = document.querySelector(".update-spinner i");
      $updateSpinnerIcon.classList.remove("fa-circle-notch");
      $updateSpinnerIcon.classList.add("fa-check");
      $updateSpinnerIcon.style.animation = "none";
    }, 1000);
  } else {
    $mainBannerSectionContainer.classList.remove("hide");
    $filterContainerBackground.classList.add("hide");
    $navContainer.style.color = "white";
    $(".main-card-mix-container").mixItUp("filter", "all");
    document.querySelectorAll(".filter-list-category .filter").forEach((v) => {
      if (v.classList.contains("option-all")) v.classList.add("option-clicked");
      else {
        v.classList.remove("option-clicked");
      }
    });
  }
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 330) {
    $(".update-info-container").fadeOut();
  } else {
    $(".update-info-container").fadeIn();
  }
});
