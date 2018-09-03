const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");


module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
				chunks: 'all'
			}
	},
	
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude:/node_modules/,
				use: {
					loader:"babel-loader",
					query: {
						presets: ['react'],
						plugins: ['transform-object-rest-spread']
					}
				},
			
			},
			{
				test:/\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
                test: /\.(jpeg|jpg|png|gif|svg)$/i, 
                use: [
                    {
                        loader: "file-loader", 
                        options: {
							limit: 100000,
							// publicPath: 'http://localhost:3000/',
                        }
                    }
                ]
            }

		]
	},
	/*devServer: {
		compress: true,
		quiet: true,
		port: 9101,
		historyApiFallback: true,
		host: '0.0.0.0', // Make it accessible from another host
	},*/
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new HtmlWebpackPlugin({
		  template: path.resolve('template/index.ejs'),
		}),
		new webpack.NamedModulesPlugin(),
		// add better error logging for build
		new FriendlyErrorsWebpackPlugin(),
	  ],
};
