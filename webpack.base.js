const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors,
    path.resolve(__dirname, 'app', 'index.js')
  ],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
	},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'app', 'index.html')
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app')
    }
  }
}
