// filter 부
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
            searchFilterClassName = ".content-title";
          } else if (searchFilter === "Hall") {
            searchFilterClassName = ".content-hallname";
          } else if (searchFilter === "Country") {
            searchFilterClassName = ".content-countryname";
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

//
window.addEventListener("load", function () {
  setTimeout(lazyLoad, 1000);
});

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

// 드래그 부
