const pkg = require('../package.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
  const mode = env.NODE_ENV 
  const rootDist = path.resolve(__dirname, `../dist`)
  const SDKDistributionDir = `${pkg.name}/${pkg.version}`
  const rootPath = mode === "production" ? `${rootDist}/${SDKDistributionDir}` : rootDist
  const extensions = [".wasm", ".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".sass"]
  const miniCssExtractPlugin = require('mini-css-extract-plugin');

  const commonConfig = {
    mode,
    entry: './src/index',
    output: {
      path: rootPath,
      filename: `js/main.min.js`
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.ejs',
        title: `${pkg.name} - ${pkg.version}`,
        cssFile: 'main.min.css'
      }),
      new miniCssExtractPlugin({
        filename: 'css/[name].min.css',
        chunkFilename: '[id].css'
      })
    ],
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          mode !== 'production' ? 'style-loader' : miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              }
            },
          },
        ],
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

  const optimize = {
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
  }

  if (mode !== "production") {
    return merge(
      commonConfig,
      developmentConfig
    )
  } else {
    return merge(
      commonConfig,
      optimize
    )
  }
}