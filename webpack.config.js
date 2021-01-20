const path = require("path");
require("babel-polyfill");

// or  "style-loader"
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./"),
		filename: "index.js",
		chunkFilename: "[id].js"
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	plugins: [new MiniCssExtractPlugin({
		filename: "index.css",
		chunkFilename: "[id].css"
	})],
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	}
};