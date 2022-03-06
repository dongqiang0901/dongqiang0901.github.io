const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, '../docs'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true
  },
  devServer: {
    port: 2022,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/,
        type: 'asset/resource'
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: true
    })
  ]
}
