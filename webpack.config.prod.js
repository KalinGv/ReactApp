
const webpack = require("webpack");
const path = require("path");
const Obfuscator = require("webpack-obfuscator");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");

process.env.NODE_ENV = "production";

module.exports = {

	entry: {
		app: "./src/index.js",


	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
		filename: "[name].bundle.js",
	},
	devtool: "source-map",

	mode: "production",
	module: {
		rules: [

			{

				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",

					}
				]
			},

			{

				test: /\.(scss|css)$/,


				use: [
					MiniCssExtractPlugin.loader,
					{
					  loader: "css-loader",
					  options: {
						sourceMap: true
					  }
					},
					{
					  loader: "postcss-loader",
					  options: {
						plugins: () => [require("cssnano")],
						sourceMap: true
					  }
					}
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
			// Display bundle stats
		new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		  }),
		new webpack.DefinePlugin({
			// This global makes sure React is built in prod mode.
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.API_URL": JSON.stringify("http://localhost:4008")
		}),
		new HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				filename: "./index.html",
				minify: {
					// see https://github.com/kangax/html-minifier#options-quick-reference
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true
				  }
				

			}
		),
		new Obfuscator({
			rotateUnicodeArray: true
		}, []),

	],

};
