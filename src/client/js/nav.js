if (document.title.toLowerCase().indexOf("main") === -1) {
  document
    .querySelectorAll(".nav__item-filter .nav__item-content-gridbox")
    .forEach((v) => (v.style.display = "none"));
  document.querySelector(".nav__item-content-box.triple").style.height = "87px";
}

const $mainBannerSectionContainer = document.querySelector(
  ".main-banner-section-container"
);
const $filterContainerBackground = document.querySelector(
  ".filter-container-background"
);

$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $mainBannerSectionContainer.classList.add("hide");
    $filterContainerBackground.classList.remove("hide");
  } else {
    $mainBannerSectionContainer.classList.remove("hide");
    $filterContainerBackground.classList.add("hide");
  }
});
