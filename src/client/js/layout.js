(function importAllImages() {
  const r = require.context("../img", false, /\.(png|jpe?g|gif|svg)$/);
  return r.keys().map(r);
})();

// 사용자 마우스 잠수 탐지
let detectionCount = 0;
setInterval(() => {
  detectionCount += 1;
  if (detectionCount === 180) {
    // 300초간 움직임 없을 시
    location.href = "/";
  }
}, 1000);

function userDetection(e) {
  detectionCount = 0;
}
window.addEventListener("mousemove", userDetection);
