// 필터 파트
let searchFilter = "Title"; // default
document.querySelectorAll(".radio-btn").forEach((v) =>
  v.addEventListener("click", () => {
    const $filterSearchbar = document.querySelector(".filter-search-bar");
    searchFilter = v.value;
    $filterSearchbar.value = "";
    $filterSearchbar.placeholder = `Search ${searchFilter}`;
  })
);

const mainCardSectionContainer = ".main-card-section-container";
$(function () {
  $(mainCardSectionContainer).mixItUp({
    animation: {
      duration: 1000,
      effects: "fade translateY(100%) stagger(25ms)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      reverseOut: false,
      staggerSequence: function (i) {
        return i % 8; // 3
      },
    },
  });

  var inputText;
  var $matching = $();

  // delay
  var delay = (function () {
    var timer = 2;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  let searchFilterClassName;
  $(".filter-search-bar").keyup(function () {
    delay(function () {
      inputText = $(".filter-search-bar").val().toLowerCase();
      if (inputText.length > 0) {
        $(".mix").each(function () {
          $this = $("this");

          if (searchFilter === "Title") {
            searchFilterClassName = ".main-card-info .info-title";
          } else if (searchFilter === "Hall") {
            searchFilterClassName = ".main-card-info .info-hall";
          } else if (searchFilter === "Country") {
            searchFilterClassName = ".main-card-info .info-country";
          }
          if (
            $(this)
              .find(searchFilterClassName)
              .text()
              .toLowerCase()
              .match(inputText)
          ) {
            $matching = $matching.add(this);
          } else {
            $matching = $matching.not(this);
          }
        });
        $(mainCardSectionContainer).mixItUp("filter", $matching);
      } else {
        // input 값 없으면 리셋
        $(mainCardSectionContainer).mixItUp("filter", "all");
      }
    }, 600);
  });
});

// 이미지 지연 로딩 파트
// window.addEventListener("load", function () {
//   setTimeout(lazyLoad, 1000);
// });

// function lazyLoad() {
//   var card_images = document.querySelectorAll(".card-front");

//   card_images.forEach(function (card_image) {
//     var content_image = card_image.querySelector("img");
//     var image_url = content_image.getAttribute("src");
//     content_image.src = image_url;
//     content_image.addEventListener("load", function () {
//       card_image.style.backgroundImage = "url(" + image_url + ")";
//       card_image.className = card_image.className + " is-loaded";
//     });
//   });
// }

// 정보 플로팅 파트
const $mainCardInfoFloater = document.querySelector(".main-card-info-floater");

const $$mainCardContainer = document.querySelectorAll(".main-card-container");
const handleCardMouseEnter = (e) => {
  $mainCardInfoFloater.style.opacity = "1";

  const $mainCardInfo = e.target.querySelector(".main-card-info");
  const cardInfo = $mainCardInfo.children;

  const cardTitle = cardInfo[0].textContent;
  const cardDate = cardInfo[1].textContent;
  const cardHall = cardInfo[2].textContent;
  const cardCountry = cardInfo[3].textContent;
  const cardCategory = cardInfo[4].textContent;
  const cardImageSrc = cardInfo[5].textContent;

  const floaterSubtitleCol1 = document.querySelector(
    ".floater-subtitle-col.col1 h1"
  );
  floaterSubtitleCol1.textContent = `${cardCountry} ${cardCategory}`;
  const floaterSubtitleCol2 = document.querySelector(
    ".floater-subtitle-col.col2 h1"
  );
  floaterSubtitleCol2.textContent = `${cardHall}`;
  const floaterSubtitleCol3 = document.querySelector(
    ".floater-subtitle-col.col3 h1"
  );
  floaterSubtitleCol3.textContent = `${cardDate}`;

  const floaterImg = document.querySelector(".floater-img img");
  floaterImg.src = cardImageSrc;
  const floaterTitle = document.querySelector(".floater-title h1");
  floaterTitle.textContent = `${cardTitle}`;
};
$$mainCardContainer.forEach((v) =>
  v.addEventListener("mouseenter", handleCardMouseEnter)
);

const handleCardMouseLeave = () => {
  $mainCardInfoFloater.style.opacity = "0";
};
$$mainCardContainer.forEach((v) =>
  v.addEventListener("mouseleave", handleCardMouseLeave)
);
