// 필터 파트
const $filterContainerBackground = document.querySelector(".filter-container");
const $filterListCategories = document.querySelectorAll(
  ".filter-list-category > div"
);
$filterListCategories.forEach((v) =>
  v.addEventListener("click", () => {
    $filterListCategories.forEach((category) =>
      category.classList.remove("option-clicked")
    );
    v.classList.add("option-clicked");
  })
);
const searchOptions = {
  title: "Title",
  hall: "Hall",
  country: "Country",
};
let searchFilter = searchOptions.title; // default

const $$optionSearchOptions = document.querySelectorAll(".option-search div");
$$optionSearchOptions.forEach((v) =>
  v.addEventListener("click", () => {
    const $filterSearchbar = document.querySelector(".filter-search-bar");
    $$optionSearchOptions.forEach((searchOption) =>
      searchOption.classList.remove("option-clicked")
    );
    v.classList.add("option-clicked");
    if (v.classList.contains("option-title")) {
      searchFilter = searchOptions.title;
    } else if (v.classList.contains("option-hall")) {
      searchFilter = searchOptions.hall;
    } else if (v.classList.contains("option-country")) {
      searchFilter = searchOptions.country;
    }

    $filterSearchbar.value = "";
    $filterSearchbar.placeholder = `Search ${searchFilter}`;
  })
);

const mainCardMixContainer = ".main-card-mix-container";
$(function () {
  $(mainCardMixContainer).mixItUp({
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

          if (searchFilter === searchOptions.title) {
            searchFilterClassName = ".main-card-info .info-title";
          } else if (searchFilter === searchOptions.hall) {
            searchFilterClassName = ".main-card-info .info-hall";
          } else if (searchFilter === searchOptions.country) {
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
        $(mainCardMixContainer).mixItUp("filter", $matching);
      } else {
        // input 값 없으면 리셋
        $(mainCardMixContainer).mixItUp("filter", "all");
      }
    }, 600);
  });
});

// 정보 플로팅 파트
const $mainCardInfoFloater = document.querySelector(".main-card-info-floater");
const $$mainCardContainers = document.querySelectorAll(".main-card-container");
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
$$mainCardContainers.forEach((v) =>
  v.addEventListener("mouseenter", handleCardMouseEnter)
);

const handleCardMouseLeave = () => {
  $mainCardInfoFloater.style.opacity = "0";
};
$$mainCardContainers.forEach((v) =>
  v.addEventListener("mouseleave", handleCardMouseLeave)
);

// 메인카드 제자리로
function mainCardReplacing() {
  $filterContainerBackground.classList.remove("main-card-clicked");

  $$mainCardContainers.forEach((v) => {
    v.classList.add("hoverable");
    v.style.zIndex = 1;
    if (v.classList.contains("main-card-clicked")) {
      v.style.left = 0;
      v.style.top = 0;
      v.classList.remove("main-card-clicked");
      v.querySelector(".main-card-image").classList.remove("main-card-clicked");
      v.querySelector(".main-card").classList.remove("main-card-clicked");
      v.querySelector(".main-card-detail-container").classList.remove(
        "main-card-clicked"
      );
      v.previousSibling.classList.remove("main-card-clicked"); // main-card-detail-background
      v.querySelector(".main-card-category-icon").classList.remove(
        "main-card-clicked"
      );
      v.querySelector(".main-card-country-icon").classList.remove(
        "main-card-clicked"
      );
      $mainCardInfoFloater.classList.remove("main-card-clicked");
    }
  });

  setTimeout(() => {
    $$mainCardContainers.forEach((v) => {
      v.addEventListener("click", handleCardClick);
    });
  }, 1000);
}

// 메인카드 클릭 이벤트
const handleCardClick = (e) => {
  const $mainCardContainer = e.currentTarget;
  const $mainCardDetailBackground = $mainCardContainer.previousSibling;

  $mainCardContainer.style.zIndex = 9999;
  $mainCardContainer.classList.add("main-card-clicked");

  $mainCardContainer
    .querySelector(".main-card")
    .classList.add("main-card-clicked");
  $mainCardContainer
    .querySelector(".main-card-image")
    .classList.add("main-card-clicked");
  $mainCardContainer
    .querySelector(".main-card-detail-container")
    .classList.add("main-card-clicked");
  $mainCardContainer
    .querySelector(".main-card-category-icon")
    .classList.add("main-card-clicked");
  $mainCardContainer
    .querySelector(".main-card-country-icon")
    .classList.add("main-card-clicked");
  $mainCardDetailBackground.classList.add("main-card-clicked");
  $filterContainerBackground.classList.add("main-card-clicked");
  $mainCardDetailBackground.addEventListener("click", () => {
    // (임시)나중에 x버튼도 추가
    mainCardReplacing();
  });
  $$mainCardContainers.forEach((v) =>
    v.removeEventListener("click", handleCardClick)
  );

  // 메인카드 반응형 위치
  let extraWidthPercent = 10.8;
  let extraHeightPercent = 50;
  window.addEventListener("resize", () => {
    currentBrowserWidth = document.body.clientWidth;
    if (currentBrowserWidth < 768) {
    } else {
    }

    mainCardReplacing();
  });
  const viewPortWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const viewPortHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  if (viewPortWidth < 768) {
    extraWidthPercent = 6;
  }
  const currentCardX = $mainCardContainer.getClientRects()[0].x;
  const currentCardY = $mainCardContainer.getClientRects()[0].y;
  // $mainCardContainer.style.left = `${
  //   viewPortWidth / 2 - currentCardX - viewPortWidth / extraWidthPercent
  // }px`;
  $mainCardContainer.style.left = `${0 - currentCardX + viewPortWidth / 10}px`;
  $mainCardContainer.style.top = `${
    0 - currentCardY + viewPortHeight / 20 - extraHeightPercent
  }px`;
  console.log($mainCardContainer.style.top);
  $$mainCardContainers.forEach((v) => {
    v.classList.remove("hoverable");
  });
  $mainCardInfoFloater.classList.add("main-card-clicked");
};

function init() {
  $$mainCardContainers.forEach((v) => {
    // v.style.zIndex = 1;
    v.addEventListener("click", handleCardClick);
  });
}

init();

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

const $mainBannerSlider = document.querySelector(".main-banner-slider");
const $mainBannerTrailer = document
  .querySelector(".main-banner-trailer")
  .querySelectorAll("div");
let value = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {
  clearInterval(start);
  condition === "increase" ? initiateINC() : initiateDEC();
  move(value, trailValue);
  animate();
  start = setInterval(() => slide("increase"), interval);
};

const initiateINC = () => {
  $mainBannerTrailer.forEach((cur) => cur.classList.remove("active"));
  value === 80 ? (value = 0) : (value += 20);
  trailUpdate();
};

const initiateDEC = () => {
  $mainBannerTrailer.forEach((cur) => cur.classList.remove("active"));
  value === 0 ? (value = 80) : (value -= 20);
  trailUpdate();
};

const move = (S, T) => {
  $mainBannerSlider.style.transform = `translateX(-${S}%)`;
  $mainBannerTrailer[T].classList.add("active");
};

const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power4.inOut" } });
tl.from(".banner-detail-filter", { x: "-100%", opacity: 0, delay: 0.3 })
  .from(".banner-detail p", { opacity: 0 }, "-=0.3")
  .from(".banner-detail h1", { opacity: 0, y: "30px" }, "-=0.3");

const animate = () => tl.restart();

const trailUpdate = () => {
  if (value === 0) {
    trailValue = 0;
  } else if (value === 20) {
    trailValue = 1;
  } else if (value === 40) {
    trailValue = 2;
  } else if (value === 60) {
    trailValue = 3;
  } else {
    trailValue = 4;
  }
};

let start = setInterval(() => slide("increase"), interval);

document.querySelectorAll("svg").forEach((cur) => {
  cur.addEventListener("click", () =>
    cur.classList.contains("next") ? slide("increase") : slide("decrease")
  );
});

const clickCheck = (e) => {
  clearInterval(start);
  $mainBannerTrailer.forEach((cur) => cur.classList.remove("active"));

  const check = e.target;
  check.classList.add("active");

  if (check.classList.contains("trail-box1")) {
    value = 0;
  } else if (check.classList.contains("trail-box2")) {
    value = 20;
  } else if (check.classList.contains("trail-box3")) {
    value = 40;
  } else if (check.classList.contains("trail-box4")) {
    value = 60;
  } else if (check.classList.contains("trail-box5")) {
    value = 80;
  }
  trailUpdate();
  move(value, trailValue);
  animate();
  start = setInterval(() => slide("increase"), interval);
};

$mainBannerTrailer.forEach((cur) =>
  cur.addEventListener("click", (ev) => clickCheck(ev))
);

const touchSlide = (() => {
  let start, move, change, sliderWidth;

  $mainBannerSlider.addEventListener("touchstart", (e) => {
    start = e.touches[0].clientX;
    sliderWidth = $mainBannerSlider.clientWidth / $mainBannerTrailer.length;
  });

  $mainBannerSlider.addEventListener("touchmove", (e) => {
    e.preventDefault();
    move = e.touches[0].clientX;
    change = start - move;
  });

  const mobile = (e) => {
    change > sliderWidth / 4 ? slide("increase") : null;
    change * -1 > sliderWidth / 4 ? slide("decrease") : null;
    [start, move, change, sliderWidth] = [0, 0, 0, 0];
  };
  $mainBannerSlider.addEventListener("touchend", mobile);
})();
