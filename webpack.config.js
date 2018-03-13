const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./app/index.js'],
  watch: true,
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.html$/,
      use: {
        loader: 'html-loader'
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
      use: {
        loader: 'url-loader'
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Page: path.resolve(__dirname, 'app/js/page'),
      Shared: path.resolve(__dirname, 'app/js/shared'),
      Sass: path.resolve(__dirname, 'app/sass')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './app/index.html',
      filename: './index.html'
    })
  ]
};
