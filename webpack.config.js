const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}
