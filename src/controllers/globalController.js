import ExbModel from "../models/ExbModel";
import shuffle from "../js/shuffleExb";

export const intro = async (req, res) => {
  const allExb = await ExbModel.find({});
  shuffle(allExb);
  return res.render("intro", {
    pageTitle: "Intro",
    allExb: allExb,
  });
};

/*
{
    _id: new ObjectId("62be9eb9035e1a0b28da78c8"),
    title: 'Discover the Buddhist Pantheon',
    date: 'July 16, 2022（Sat）–August 28, 2022（Sun）',
    thumbnailSrc: 'https://www.narahaku.go.jp/english/wodpr_nh9/wp-content/uploads/2022/03/202207hakken_top.jpg',
    detail: 'The Shōsō-in treasures convey the spirit of the Tenpyō era, their brilliance miraculously surviving to the present day. This autumn, we invite you to experience their eternal resplendence at the Nara National 
Museum’s annual Shōsō-in exhibition.',
    link: 'https://www.narahaku.go.jp/english/exhibition/special/202210_shosoin_20220614/',
    hall: 'Nara National Museum',    
    category: 'museum',
    __v: 0
},
*/
