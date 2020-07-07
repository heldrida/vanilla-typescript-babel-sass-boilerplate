const pkg = require('./package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${pkg.name}/${pkg.version}/js/main.min.js`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'TS+Babel+LiveReload Boilerplate',
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.styl$/,
      use: {
        loader: 'style-loader!css-loader!stylus-loader'
      }
    }]
  },
  resolve: {
    extensions: ['.ts', '.styl']
  }
}

module.exports = config