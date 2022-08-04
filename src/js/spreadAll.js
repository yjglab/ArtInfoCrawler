import shuffle from "./shuffleExb";
import ExbModel from "../models/ExbModel";

const spreadAll = async () => {
  const allExb = await ExbModel.find({});
  shuffle(allExb);
  // console.log(allExb[0], allExb.length);
  return allExb;
};

export default spreadAll;
