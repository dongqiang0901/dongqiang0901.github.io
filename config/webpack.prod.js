const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, '../docs'),
    filename: 'js/[name].[contenthash:8].js',
    clean: true,
    assetModuleFilename: 'images/[name].[contenthash:8][ext]'
  },
  devtool: false,
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
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
      minify: true,
      title: 'dongqiang的个人主页'
    }),
    // 复制目录到dist下
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            // 忽略文件
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
