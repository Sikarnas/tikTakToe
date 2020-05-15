const path = require('path');

module.exports = {
  mode: 'development',
  entry: './fronend/tikTakToe.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4554,
  }
};