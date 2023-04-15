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
        {
            test:/\.(?:ico|gif|png|jpeg|jpg)$/i,
            type: 'asset/resource',
            generator:{
                filename:'images/[name]-[hash:5][ext]',
            }
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf|svg)$/,
            type: 'asset/resource',
            generator:{
                filename:'fonts/[name]-[hash:5][ext]',
            }
        },

    ]
    },
  };