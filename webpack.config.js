// old code only
const path = require("path");

module.exports = {
  entry: { main: "./src/client/js/main.js", sub: "./src/client/js/sub.js" },
  mode: "development",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 5000,
    poll: 1000,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "assets", "js"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
