const pkg = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SDKDistributionDir = `${pkg.name}/${pkg.version}`

const config = {
  entry: './src/index',
  mode: process.env.NODE_ENV ? 'production' : 'development',
    output: {
    path: path.resolve(__dirname, `../dist/${SDKDistributionDir}`),
    filename: `js/main.min.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: `${pkg.name} - ${pkg.version}`,
      SDKDistributionDir
    })
  ],
  devServer: {
    contentBase: SDKDistributionDir
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: ['.ts']
  }
}

module.exports = config