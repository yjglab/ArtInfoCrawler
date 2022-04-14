const spawn = require("child_process").spawn;
const result = spawn("python", ["british.py"]);
let pythonData;
result.stdout.on("data", function (data) {
  pythonData = data.toString();
  console.log(data.toString());
});
result.stderr.on("data", function (data) {
  console.log(data.toString());
});

export const main = (req, res) => {
  res.render("main", { pageTitle: "결과", pythonData });
};
