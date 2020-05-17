const path = require('path');

module.exports = {
  mode: 'development',
  entry: './tikTakToe.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 4554,
  }
};