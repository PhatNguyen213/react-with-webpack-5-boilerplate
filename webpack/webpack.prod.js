const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Disable React DevTools in production
const disableReactDevtools = `
<script>
if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
   __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
}
</script>
`;

module.exports = {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      // favicon: '../public/favicon.ico',
      hash: true,
      disableReactDevtools,
    }),
  ],
  devtool: 'source-map',
};
