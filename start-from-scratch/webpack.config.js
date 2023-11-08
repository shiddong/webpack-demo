const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js", // 默认是 main.js
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
