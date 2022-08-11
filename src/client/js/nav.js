if (document.title.toLowerCase().indexOf("main") === -1) {
  document
    .querySelectorAll(".nav__item-filter .nav__item-content-gridbox")
    .forEach((v) => (v.style.display = "none"));
  document.querySelector(".nav__item-content-box.triple").style.height = "87px";
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("nav-affix");
  } else {
    $(".nav").removeClass("nav-affix");
  }
});
