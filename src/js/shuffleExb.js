const shuffle = (arr) => {
  for (let idx = arr.length - 1; idx > 0; idx--) {
    const randomPosition = Math.floor(Math.random() * (idx + 1));
    const temp = arr[idx];
    arr[idx] = arr[randomPosition];
    arr[randomPosition] = temp;
  }
};

export default shuffle;
