const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 200000,
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxEntrypointSize: 51200,
    maxAssetSize: 512000,
  },
  devServer: {
    quiet: true,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('template/index.ejs'),
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 3003,
      openAnalyzer: false, // change to true for visual overview
      statsFilename: './monitor.stats.json',
      logLevel: 'info', //info, warn, error or silent 
    }),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
}

/*
  plugins: [
    new WebpackMonitor({
      capture: true, // -> default 'true'
      target: './monitor/stats.json',
      errors: false,
      // launch: true,
      port: 3030, // default -> 8081
    }),
    ]
*/