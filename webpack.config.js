const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = (env = {}) => {
  const { mode = "production", presets = [] } = env;

  console.log("presets:", presets);
  console.log("mode:", mode);
  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
          {
            test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
            use: "file-loader",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `${
            mode === "development" ? "Development Mode" : "Selling Easier"
          }`,
          template: "./public/index.html",
        }),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
