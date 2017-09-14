const path = require('path');

module.exports = {
  entry: './src/main.ts',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },

  devServer: {
    hot: true,
    // inline: true,
    port: 9000,
    open: true,
    overlay: true
  }
};
