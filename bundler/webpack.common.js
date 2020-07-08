const pkg = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = env => {
  const mode = env.NODE_ENV 
  const rootDist = path.resolve(__dirname, `../dist`)
  const SDKDistributionDir = `${pkg.name}/${pkg.version}`
  const rootPath = mode === "production" ? `${rootDist}/${SDKDistributionDir}` : rootDist
  const cssFile = mode === "production" ? 'css/main.min.css' : 'static/css/main.css'
  const extensions = [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"]
  
  const commonConfig = {
    entry: './src/index',
    output: {
      path: rootPath,
      filename: `js/main.min.js`
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        title: `${pkg.name} - ${pkg.version}`,
        cssFile
      })
    ],
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
      extensions,
      modules: ["src", "node_modules"]
    }
  }
  
  const developmentConfig = {
    devServer: {
      contentBase: rootPath,
      compress: true,
      port: 9000,
      allowedHosts: [
        'localhost'
      ],
      clientLogLevel: 'warn',
      watchContentBase: true
    }
  }

  if (mode !== "production") {
    return merge(
      commonConfig,
      developmentConfig
    )
  }
  return commonConfig
}