const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    "src/app/bundle": "./src/app/index.ts"
  },
  output: {
    filename: "src/app/bundle.js"
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  
  resolve: {
    extensions: [".ts", ".js"]
  }
};
