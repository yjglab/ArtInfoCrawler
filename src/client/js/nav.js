// intro 페이지 nav
const $navContainer = document.querySelector(".nav-container");
$(window).scroll(function () {
  if ($(document).scrollTop() > 120) {
    $navContainer.classList.add("scroll-down");
  } else {
    $navContainer.classList.remove("scroll-down");
  }
});

// main 페이지 nav
if (document.title.toLowerCase().indexOf("introduction") === -1) {
  const $mainBannerSectionContainer = document.querySelector(
    ".main-banner-section-container"
  );

  $(window).scroll(function () {
    if ($(document).scrollTop() > 120) {
      $mainBannerSectionContainer.classList.add("hide");
    } else {
      $mainBannerSectionContainer.classList.remove("hide");
      // $(".main-card-mix-container").mixItUp("filter", "all");
      document
        .querySelectorAll(".filter-list-category .filter")
        .forEach((v) => {
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
}
