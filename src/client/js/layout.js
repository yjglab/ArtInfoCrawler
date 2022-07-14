const $navListLis = document.querySelectorAll(".nav__list li");
$navListLis.forEach((v) => {
  v.addEventListener("click", (e) => {
    let linkTitle = e.currentTarget.textContent.toLowerCase();

    setTimeout(() => {
      $("#loader").fadeIn();
    }, 100);
    setTimeout(() => {
      if (linkTitle === "trends") linkTitle = "";
      window.open(`/${linkTitle}`, "_self");
    }, 500);
  });
});
