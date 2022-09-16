"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var shuffle = function shuffle(allExb) {
  for (var idx = allExb.length - 1; idx > 0; idx--) {
    var randomIdx = Math.floor(Math.random() * (idx + 1));
    var temp = allExb[idx];
    allExb[idx] = allExb[randomIdx];
    allExb[randomIdx] = temp;
  } // for (let i = 0; i < 1; i++) {
  //   console.log(allExb[i].thumbnailSrc);
  // }

};

var _default = shuffle;
exports["default"] = _default;