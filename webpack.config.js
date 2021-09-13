const { resolve } = require('path'); 
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {                  
    entry: resolve(__dirname, 'src', 'main.js'),         
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },

    module: {
        rules: [
            { test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                { test: /\.(png|jpe?g|gif)$/i, 
						use: ['file-loader',
                            { loader: 'image-webpack-loader',
                              options: {
                                mozjpeg: {
                                  progressive: true,
                                  quality: 70
                                },
                                gifsicle: {
                                    interlaced: false,
                                  },
                                }
                            }
                                ]
                },
                { test: /\.(mp3)$/i,
                  use: [
                      'file-loader'
                  ]

                },
                { test: /\.(mp4)$/i,
                    use: [
                        'file-loader'
                    ]
  
                  }
            ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),

],
}

