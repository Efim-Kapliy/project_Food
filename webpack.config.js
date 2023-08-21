"use strict";

let path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
};
