import ExbHallModel from "../models/ExbHallModel";
import spreadAll from "../js/spreadAll";
import dbtest from "../js/dbtest";

export const intro = async (req, res) => {
  return res.render("intro", {
    pageTitle: "Introduction",
    allExbs: await spreadAll(),
  });
};
export const test = async (req, res) => {
  return res.render("test", {
    pageTitle: "test",
    dbtest: dbtest(),
  });
};
// export const hallDetail = async (req, res) => {
//   //   console.log(req);
//   const hall = await ExbHallModel.findById(req.params.id);

//   return res.render("hallDetail", {
//     pageTitle: `${hall.hallName}`,
//     hall: hall,
//   });
// };
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
