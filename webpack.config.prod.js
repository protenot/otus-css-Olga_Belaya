const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    
    
    entry: { 
       main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
      filename: '[name].[hash-8].js',
      path: path.resolve(__dirname, './prod'),
      clean: true,
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [miniCss.loader, "css-loader"],

        },
        {
             test: /\.html$/,
            use: "html-loader",
        },
        {
            test:/\.(?:ico|gif|png|jpeg|jpg|svg)$/i,
            use:[
                {
                    loader: 'image-webpack-loader',
                    options:{
                        mozjpeg:{
                            progressive:true,
                        },
                    optiping:{
                        enabled:false,
                    },    
                    pngquant: {
                      quality: [0.65, 0.90],
                      speed: 4      
                    },
                    gifsicle:{
                        interlaced:false,
                    }

                    }
                },
            ],
            type: 'asset/resource',
            generator:{
                filename:'images/[name]-[hash:5][ext]',
            }
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/,
            
            type: 'asset/resource',
            generator:{
                filename:'fonts/[name]-[hash:5][ext]',
            }
        }

    ]
    },
    
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'), 
                 filename: 'index.html', 
        }),
            new miniCss({
          
			filename: 'style.css',
		}),

        ],
  
    }
    