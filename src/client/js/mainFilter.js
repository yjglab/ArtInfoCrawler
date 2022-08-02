document.querySelectorAll(".mainSection__card-inner").forEach((v) =>
  v.addEventListener("click", () => {
    v.classList.add("flipped");

    setTimeout(() => {
      v.classList.remove("flipped");
    }, 4000);
  })
);

// filter 부
const filterContainer = ".filter-container";
$(function () {
  $(filterContainer).mixItUp();

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

  $(".filter-search-bar").keyup(function () {
    delay(function () {
      inputText = $(".filter-search-bar").val().toLowerCase();

      if (inputText.length > 0) {
        $(".mix").each(function () {
          $this = $("this");

          // 매치된 타이틀만 전송
          if (
            $(this).find(".content-title").text().toLowerCase().match(inputText)
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
    }, 200);
  });
});

//
