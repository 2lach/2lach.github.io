const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WebpackMonitor = require('webpack-monitor');


module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		filename: "index_bundle.js",
		path: path.join(__dirname, "./"),
		chunkFilename: '[name].bundle.js',
	},
	optimization: {
		splitChunks: {
				chunks: 'all'
			}
	},
	
	module:{
		rules:[
			{
				test: /\.js$/,
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
                            limit: 100000
                        }
                    }
                ]
            }

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new webpack.ContextReplacementPlugin(),
    	/*new WebpackMonitor({
				capture: true,
				launch: true,
    	}),*/
	]
};
