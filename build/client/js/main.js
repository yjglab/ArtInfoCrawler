"use strict";

var $mainCardCursor = document.querySelector(".main-card-cursor");
var $navListContainer = document.querySelector(".nav-list-container"); // 필터 파트

var $filterContainerBackground = document.querySelector(".filter-container");
var $filterListCategories = document.querySelectorAll(".filter-list-category > div");
$filterListCategories.forEach(function (v) {
  return v.addEventListener("click", function () {
    $filterListCategories.forEach(function (category) {
      return category.classList.remove("option-clicked");
    });
    v.classList.add("option-clicked");
  });
});
var searchOptions = {
  title: "Title",
  hall: "Hall",
  country: "Country"
};
var searchFilter = searchOptions.title; // default

var $$optionSearchOptions = document.querySelectorAll(".option-search div");
$$optionSearchOptions.forEach(function (v) {
  return v.addEventListener("click", function () {
    var $filterSearchbar = document.querySelector(".filter-search-bar");
    $$optionSearchOptions.forEach(function (searchOption) {
      return searchOption.classList.remove("option-clicked");
    });
    v.classList.add("option-clicked");

    if (v.classList.contains("option-title")) {
      searchFilter = searchOptions.title;
    } else if (v.classList.contains("option-hall")) {
      searchFilter = searchOptions.hall;
    } else if (v.classList.contains("option-country")) {
      searchFilter = searchOptions.country;
    }

    $filterSearchbar.value = "";
    $filterSearchbar.placeholder = "Search ".concat(searchFilter);
  });
});
var mainCardMixContainer = ".main-card-mix-container";
$(function () {
  $(mainCardMixContainer).mixItUp({
    animation: {
      duration: 1000,
      effects: "fade translateY(100%) stagger(25ms)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      reverseOut: false,
      staggerSequence: function staggerSequence(i) {
        return i % 8; // 3
      }
    }
  });
  var inputText;
  var $matching = $(); // delay

  var delay = function () {
    var timer = 2;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  }();

  var searchFilterClassName;
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

          if ($(this).find(searchFilterClassName).text().toLowerCase().match(inputText)) {
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
}); // 정보 플로팅 파트

var $mainCardInfoFloater = document.querySelector(".main-card-info-floater");
var $$mainCardContainers = document.querySelectorAll(".main-card-container");

var handleCardMouseEnter = function handleCardMouseEnter(e) {
  $mainCardInfoFloater.style.opacity = 1;
  var $mainCardInfo = e.target.querySelector(".main-card-info");
  var cardInfo = $mainCardInfo.children;
  displayCardSubInfo(cardInfo);
  var cardTitle = cardInfo[0].textContent;
  var cardDate = cardInfo[1].textContent;
  var cardHall = cardInfo[2].textContent;
  var cardCountry = cardInfo[3].textContent;
  var cardCategory = cardInfo[4].textContent;
  var cardImageSrc = cardInfo[5].textContent;
  var floaterSubtitleCol1 = document.querySelector(".floater-subtitle-col.col1 h1");
  floaterSubtitleCol1.textContent = "".concat(cardCountry, " ").concat(cardCategory);
  var floaterSubtitleCol2 = document.querySelector(".floater-subtitle-col.col2 h1");
  floaterSubtitleCol2.textContent = "".concat(cardHall);
  var floaterSubtitleCol3 = document.querySelector(".floater-subtitle-col.col3 h1");
  floaterSubtitleCol3.textContent = "".concat(cardDate);
  var floaterImg = document.querySelector(".floater-img img");
  floaterImg.src = cardImageSrc;
  var floaterTitle = document.querySelector(".floater-title h1");
  floaterTitle.textContent = "".concat(cardTitle);
  $mainCardCursor.classList.add("main-card-hovered");
};

$$mainCardContainers.forEach(function (v) {
  return v.addEventListener("mouseenter", handleCardMouseEnter);
});

var handleCardMouseLeave = function handleCardMouseLeave() {
  $mainCardInfoFloater.style.opacity = 0;
  $mainCardCursor.classList.remove("main-card-hovered");
};

$$mainCardContainers.forEach(function (v) {
  return v.addEventListener("mouseleave", handleCardMouseLeave);
}); // 메인카드 제자리로

function mainCardReplacing() {
  $mainCardCursor.classList.remove("main-card-clicked");
  $navListContainer.style.opacity = 1;
  document.querySelector("body").style.overflow = "overlay";
  $filterContainerBackground.classList.remove("main-card-clicked");
  $$mainCardContainers.forEach(function (v) {
    v.classList.add("hoverable");
    v.style.zIndex = 1;

    if (v.classList.contains("main-card-clicked")) {
      v.style.left = 0;
      v.style.top = 0;
      v.classList.remove("main-card-clicked");
      v.querySelector(".main-card-image").classList.remove("main-card-clicked");
      v.querySelector(".main-card").classList.remove("main-card-clicked");
      v.querySelector(".main-card-detail-container").classList.remove("main-card-clicked");
      v.previousSibling.classList.remove("main-card-clicked"); // main-card-detail-background

      v.querySelector(".main-card-category-icon").classList.remove("main-card-clicked");
      v.querySelector(".main-card-country-icon").classList.remove("main-card-clicked");
      v.querySelector(".main-card-extra-btn").classList.remove("main-card-clicked");
      $mainCardInfoFloater.classList.remove("main-card-clicked");
    }
  });
  setTimeout(function () {
    $$mainCardContainers.forEach(function (v) {
      v.addEventListener("click", handleCardClick);
    });
  }, 1000);
} // 메인카드 클릭 이벤트


var handleCardClick = function handleCardClick(e) {
  document.querySelector("body").style.overflow = "hidden";
  var $mainCardContainer = e.currentTarget;
  var $mainCardDetailBackground = $mainCardContainer.previousSibling;
  var $mainCardExtraBtn = $mainCardContainer.querySelector(".main-card-extra-btn");
  $navListContainer.style.opacity = 0;
  $mainCardCursor.classList.add("main-card-clicked");
  $mainCardContainer.style.zIndex = 9999;
  $mainCardContainer.classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card").classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card-image").classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card-detail-container").classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card-category-icon").classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card-country-icon").classList.add("main-card-clicked");
  $mainCardDetailBackground.classList.add("main-card-clicked");
  $filterContainerBackground.classList.add("main-card-clicked");
  $mainCardContainer.querySelector(".main-card-extra-btn").classList.add("main-card-clicked");
  [$mainCardDetailBackground, $mainCardExtraBtn].forEach(function (v) {
    return v.addEventListener("click", function () {
      // (임시)나중에 x버튼도 추가
      mainCardReplacing();
    });
  });
  $$mainCardContainers.forEach(function (v) {
    return v.removeEventListener("click", handleCardClick);
  }); // 메인카드 반응형 위치

  var extraWidthPercent = 10.8;
  var extraHeightPercent = 50;
  window.addEventListener("resize", function () {
    currentBrowserWidth = document.body.clientWidth;

    if (currentBrowserWidth < 768) {} else {}

    mainCardReplacing();
  });
  var viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  if (viewPortWidth < 768) {
    extraWidthPercent = 6;
  }

  var currentCardX = $mainCardContainer.getClientRects()[0].x;
  var currentCardY = $mainCardContainer.getClientRects()[0].y; // $mainCardContainer.style.left = `${
  //   viewPortWidth / 2 - currentCardX - viewPortWidth / extraWidthPercent
  // }px`;

  $mainCardContainer.style.left = "".concat(0 - currentCardX + viewPortWidth / 10, "px");
  $mainCardContainer.style.top = "".concat(0 - currentCardY + viewPortHeight / 110 - extraHeightPercent, "px");
  console.log($mainCardContainer.style.top);
  $$mainCardContainers.forEach(function (v) {
    v.classList.remove("hoverable");
  });
  $mainCardInfoFloater.classList.add("main-card-clicked");
};

setTimeout(function () {
  $$mainCardContainers.forEach(function (v) {
    v.addEventListener("click", handleCardClick);
  });
}, 1000);
var $mainBannerSlider = document.querySelector(".main-banner-slider");
var $mainBannerTrailer = document.querySelector(".main-banner-trailer").querySelectorAll("div");
var value = 0;
var trailValue = 0;
var interval = 4000;

var slide = function slide(condition) {
  clearInterval(start);
  condition === "increase" ? initiateINC() : initiateDEC();
  move(value, trailValue);
  animate();
  start = setInterval(function () {
    return slide("increase");
  }, interval);
};

var initiateINC = function initiateINC() {
  $mainBannerTrailer.forEach(function (cur) {
    return cur.classList.remove("active");
  });
  value === 80 ? value = 0 : value += 20;
  trailUpdate();
};

var initiateDEC = function initiateDEC() {
  $mainBannerTrailer.forEach(function (cur) {
    return cur.classList.remove("active");
  });
  value === 0 ? value = 80 : value -= 20;
  trailUpdate();
};

var move = function move(S, T) {
  $mainBannerSlider.style.transform = "translateX(-".concat(S, "%)");
  $mainBannerTrailer[T].classList.add("active");
};

var tl = gsap.timeline({
  defaults: {
    duration: 0.7,
    ease: "power4.inOut"
  }
});
tl.from(".banner-detail-filter", {
  x: "-100%",
  opacity: 0,
  delay: 0.3
}).from(".banner-detail p", {
  opacity: 0
}, "-=0.3").from(".banner-detail h1", {
  opacity: 0,
  y: "30px"
}, "-=0.3");

var animate = function animate() {
  return tl.restart();
};

var trailUpdate = function trailUpdate() {
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

var start = setInterval(function () {
  return slide("increase");
}, interval);
document.querySelectorAll(".banner-control-btn").forEach(function (cur) {
  cur.addEventListener("click", function () {
    return cur.classList.contains("next") ? slide("increase") : slide("decrease");
  });
});

var clickCheck = function clickCheck(e) {
  clearInterval(start);
  $mainBannerTrailer.forEach(function (cur) {
    return cur.classList.remove("active");
  });
  var check = e.target;
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
  start = setInterval(function () {
    return slide("increase");
  }, interval);
};

$mainBannerTrailer.forEach(function (cur) {
  return cur.addEventListener("click", function (ev) {
    return clickCheck(ev);
  });
});

var touchSlide = function () {
  var start, move, change, sliderWidth;
  $mainBannerSlider.addEventListener("touchstart", function (e) {
    start = e.touches[0].clientX;
    sliderWidth = $mainBannerSlider.clientWidth / $mainBannerTrailer.length;
  });
  $mainBannerSlider.addEventListener("touchmove", function (e) {
    e.preventDefault();
    move = e.touches[0].clientX;
    change = start - move;
  });

  var mobile = function mobile(e) {
    change > sliderWidth / 4 ? slide("increase") : null;
    change * -1 > sliderWidth / 4 ? slide("decrease") : null;
    start = 0;
    move = 0;
    change = 0;
    sliderWidth = 0;
  };

  $mainBannerSlider.addEventListener("touchend", mobile);
}(); // 이미지 지연 로딩 파트


window.addEventListener("load", function () {
  setTimeout(lazyLoad, 1000);
});

function lazyLoad() {
  var $$mainCardImages = document.querySelectorAll(".main-card-image");
  $$mainCardImages.forEach(function ($mainCardImage) {
    var $cardImage = $mainCardImage.querySelector(".card-image");
    var imgUrl = $cardImage.src;
    $cardImage.src = imgUrl;
    $cardImage.addEventListener("load", function () {
      $mainCardImage.style.backgroundImage = "url(" + imgUrl + ")";
      $$mainCardContainers.forEach(function (v) {
        v.classList.add("card-image-loaded");
        v.querySelector(".main-card-country-icon").classList.add("card-image-loaded");
        v.querySelector(".main-card-category-icon").classList.add("card-image-loaded");
      });
      $$mainCardImages.forEach(function (v) {
        return v.classList.add("card-image-loaded");
      });
    });
  });
} // sub 정보 플로팅 파트


var $$mainCards = document.querySelectorAll(".main-card");

var handleCardMouseMove = function handleCardMouseMove(e) {
  $mainCardCursor.style.left = "".concat(e.pageX - 150, "px");
  $mainCardCursor.style.top = "".concat(e.pageY + 30, "px");
};

var displayCardSubInfo = function displayCardSubInfo(cardInfo) {
  $mainCardCursor.querySelector(".cursor-info-hall").textContent = cardInfo[2].textContent;
  $mainCardCursor.querySelector(".cursor-info-title").textContent = cardInfo[0].textContent;
  $mainCardCursor.querySelector(".cursor-info-date").textContent = cardInfo[1].textContent;
  $mainCardCursor.querySelector(".cursor-info-country").textContent = cardInfo[3].textContent;
};

window.addEventListener("mousemove", handleCardMouseMove); // banner click 이벤트

var $$mainBanner = document.querySelectorAll(".main-banner");
$$mainBanner.forEach(function (v) {
  return v.addEventListener("click", function () {
    window.open(v.querySelector(".banner-detail span").textContent);
  });
});