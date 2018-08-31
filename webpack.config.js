const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		// Webpack will bundle all of our JavaScript files into index-bundle.js file inside the /dist directory.
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js"
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude:/node_modules/,
				use: {
					// babel-loader is used to load our JSX/JavaScript
					loader:"babel-loader",
					query: {
						presets: ['react'],
						plugins: ['transform-object-rest-spread']
					}
				},
			
			},
			{
				test:/\.css$/,
				//  and style-loader will add all of the styles inside the style tag of the document.
				//	css-loader is used to load and bundle all of the CSS files into one file
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
		})
	]
};
