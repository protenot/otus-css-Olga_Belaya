const path = require("path");

module.exports = {
    mode: "development",
    target: 'web',
    devtool: 'source-map',
    entry: path.resolve(_dirname,'./src/index.js'),
    output: {
      filename: 'studio.hash-8.js',
      path: path.resolve(__dirname, './dist'),
      clean: 'true'
    }
  };