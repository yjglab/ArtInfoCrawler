import shuffle from "./shuffleExb";
import ExbModel from "../models/ExbModel";

const distribute = async () => {
  const allExb = await ExbModel.find({});
  shuffle(allExb);

  const cols = {
    col1: [],
    col2: [],
    col3: [],
    col4: [],
    col5: [],
  };

  while (allExb.length > 180) {
    const randomIdx = Math.floor(Math.random() * 5) + 1;
    const spliced = allExb.splice(0, 1);
    switch (randomIdx) {
      case 1:
        cols.col1.push(spliced);
        break;
      case 2:
        cols.col2.push(spliced);
        break;
      case 3:
        cols.col3.push(spliced);
        break;
      case 4:
        cols.col4.push(spliced);
        break;
      case 5:
        cols.col5.push(spliced);
        break;
    }
  }

  return cols;
};

export default distribute;
