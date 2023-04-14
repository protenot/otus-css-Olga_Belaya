const path = require("path");

module.exports = {
    mode: "development",
    target: 'web',
    devtool: 'source-map',
    entry: { 
       main: path.resolve(_dirname,'./src/index.js')
    },
    output: {
      filename: '[name].[hash-8].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],

        },
        {
             test: /\.html$/,
            use: "html-loader",
        },

    ]
    },
  };