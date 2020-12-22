const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();
module.exports = () => {
  return {
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/docs"),
      filename: "bundle.js",
    },
  };
};
