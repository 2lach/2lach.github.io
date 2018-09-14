const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    main: ["babel-polyfill", "./src/index.js"]
    // other: "./src/components/App.js" 
    // use other: -> if app gets larger with the need to break it into part
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["react"],
            plugins: ["transform-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 200000
            }
          }
        ]
      }
    ]
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
    maxEntrypointSize: 51200,
    maxAssetSize: 512000
  },
  devServer: {
    quiet: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve("template/index.ejs")
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin({
      fileName: "manifest.json"
    }),
    // Error handling and analyzer
    new FriendlyErrorsWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerPort: 3333,
      openAnalyzer: false, // change to true for visual overview
      statsFilename: "./monitor.stats.json",
      logLevel: "silent" //info, warn, error or silent
    })
  ],
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          minChunks: Infinity,
          chunks: "all"
        }
      }
    }
  }
};