const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')

module.exports = env => ({
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname + '/dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    contentBase: path.resolve(__dirname + '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false,
    }),
    new HtmlReplaceWebpackPlugin({
      pattern: /src=".\/dist\/index.js"/g,
      replacement: () => 'src="index.js"',
    }),
    new webpack.EnvironmentPlugin({
      'NODE_ENV': env === 'production' ? 'production' : 'development',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ],
  },
});