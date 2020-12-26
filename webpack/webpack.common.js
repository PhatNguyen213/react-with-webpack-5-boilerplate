const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        type: 'asset/resource',
      },
      // Fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
      '@assets': path.resolve(__dirname, '..', './src/assets'),
      '@components': path.resolve(__dirname, '..', './src/components'),
      stream: 'stream-browserify',
      path: 'path-browserify',
    },
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[fullhash].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};
