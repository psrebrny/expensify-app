let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    //   contentBase: './public',
    //   hot: true
  },
  module: {
    // loaders: [{
    //   test: /\.s?css$/,
    //   loader: ExtractTextPlugin.extract('style', 'css!sass')
    // }],
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/(node_modules)/]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        })
      }
    ],
    
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ]
};