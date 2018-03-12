const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  watch: true,
  output: {
    path: path.resolve(__dirname, '../public'),
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
      Page: path.resolve(__dirname, 'src/js/page'),
      Shared: path.resolve(__dirname, 'src/js/shared'),
      Sass: path.resolve(__dirname, 'src/sass')
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
