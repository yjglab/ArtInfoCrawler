document.querySelectorAll(".mainSection__card-inner").forEach((v) =>
  v.addEventListener("click", () => {
    v.classList.add("flipped");

    setTimeout(() => {
      v.classList.remove("flipped");
    }, 4000);
  })
);

// filter 부
let searchFilter = "Title"; // default
document.querySelectorAll(".radio-btn").forEach((v) =>
  v.addEventListener("click", () => {
    const $filterSearchbar = document.querySelector(".filter-search-bar");
    searchFilter = v.value;
    $filterSearchbar.value = "";
    $filterSearchbar.placeholder = `Search ${searchFilter}`;
    console.log(searchFilter);
  })
);

const filterContainer = ".filter-container";
$(function () {
  $(filterContainer).mixItUp({
    animation: {
      duration: 1000,
      effects: "fade translateY(100%) stagger(25ms)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      reverseOut: false,
      staggerSequence: function (i) {
        return i % 8; // 3
      },
    },
    // callbacks: {
    //   onMixFail: function (state) {
    //     console.log("No items could be found matching the requested filter");
    //   },
    // },
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
        $(filterContainer).mixItUp("filter", $matching);
      } else {
        // input 값 없으면 리셋
        $(filterContainer).mixItUp("filter", "all");
      }
    }, 600);
  });
});

//
