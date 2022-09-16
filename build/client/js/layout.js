"use strict";

(function importAllImages() {
  var r = require.context("../img", false, /\.(png|jpe?g|gif|svg)$/);

  return r.keys().map(r);
})(); // const $navListLis = document.querySelectorAll(".nav__list li");
// $navListLis.forEach((v) => {
//   v.addEventListener("click", (e) => {
//     let linkTitle = e.currentTarget.textContent.toLowerCase();
//     setTimeout(() => {
//       $("#loader").fadeIn();
//     }, 100);
//     setTimeout(() => {
//       if (linkTitle === "trends") linkTitle = "";
//       window.open(`/${linkTitle}`, "_self");
//     }, 500);
//   });
// });