const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return {
    devtool: "source-map",
    devServer: {
      port: 3000,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: `${
          mode === "development" ? "Development Mode" : "Selling Easier"
        }`,
        template: "./public/index.html",
      }),
    ],
  };
};
