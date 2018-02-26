var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
      filename: './js/build.min.js',
      path: __dirname
    },
    watch: false,
    
        module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        ],
        }
  };