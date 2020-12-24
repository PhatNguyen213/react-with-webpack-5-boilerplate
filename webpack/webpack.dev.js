const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      // favicon: '../public/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  devtool: 'eval-source-map',
};
