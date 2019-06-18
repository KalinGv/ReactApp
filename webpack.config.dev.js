const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


process.env.NODE_ENV = "development";

module.exports = {
	entry:{

		app: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
		filename: "[name].bundle.js",
	},
	devtool: "cheap-module-source-map",
	devServer: {
		stats: "minimal",
    	overlay: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		disableHostCheck: true,
    	headers: { "Access-Control-Allow-Origin": "*" },
    	https: false
	},
	mode: "development",

	module: {
		rules: [

			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader",
					/* "eslint-loader" */]

				  
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader",
					"css-loader",
					"sass-loader",
				]
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: "file-loader",

			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.API_URL": JSON.stringify("http://localhost:4008")
		}),
		new HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				filename: "./index.html",
				

			}
		)
	]

};
