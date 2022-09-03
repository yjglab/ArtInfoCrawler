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
  if ($(document).scrollTop() > 160) {
    $mainBannerSectionContainer.classList.add("hide");
    $filterContainerBackground.classList.remove("hide");
    $navContainer.style.color = "black";
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
