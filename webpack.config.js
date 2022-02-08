const path = require("path");
require("babel-polyfill");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./"),
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options:{
					presets:["@babel/preset-env", "@babel/preset-react"]
				}
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css"
		})

	],
	devServer: {
		static: {
			directory: path.join(__dirname, "."),
		},
		compress: true,
		port: 3000
	}
}