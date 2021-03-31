// const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

// module.exports = {
//   entry: './src/game.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//     libraryTarget: 'var',
//     library: 'FindCat',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif|svg|ico)$/,
//         loader: 'file-loader',
//       },
//     ],
//   },
//   devServer: {
//     contentBase: './public',
//     injectClient: false,
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [
//       new TerserPlugin({
//         extractComments: false,
//       }),
//     ],
//   },
// };
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './public',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
