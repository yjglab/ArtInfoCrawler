const filterContainer = ".filter-container";
$(function () {
  $(filterContainer).mixItUp();

  var inputText;
  var $matching = $();

  // Delay function
  var delay = (function () {
    var timer = 2;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $(".filter-search-bar").keyup(function () {
    // Delay function invoked to make sure user stopped typing
    delay(function () {
      inputText = $(".filter-search-bar").val().toLowerCase();

      // Check to see if input field is empty
      if (inputText.length > 0) {
        $(".mix").each(function () {
          $this = $("this");

          // add item to be filtered out if input text matches items inside the title
          if (
            $(this).find(".content-title").text().toLowerCase().match(inputText)
          ) {
            $matching = $matching.add(this);
          } else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $(filterContainer).mixItUp("filter", $matching);
      } else {
        // resets the filter to show all item if input is empty
        $(filterContainer).mixItUp("filter", "all");
      }
    }, 200);
  });
});
