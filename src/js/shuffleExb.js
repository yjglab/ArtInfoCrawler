const shuffle = (allExb) => {
  for (let idx = allExb.length - 1; idx > 0; idx--) {
    const randomIdx = Math.floor(Math.random() * (idx + 1));
    const temp = allExb[idx];
    allExb[idx] = allExb[randomIdx];
    allExb[randomIdx] = temp;
  }

  // for (let i = 0; i < 1; i++) {
  //   console.log(allExb[i].thumbnailSrc);
  // }
};

export default shuffle;
