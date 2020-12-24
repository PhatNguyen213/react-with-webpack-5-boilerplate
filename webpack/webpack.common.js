const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@components': path.resolve(__dirname, '../src/components'),
      stream: 'stream-browserify',
      path: 'path-browserify',
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};
