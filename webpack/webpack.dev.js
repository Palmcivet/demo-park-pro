const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base");

const OUTPUT = path.join(__dirname, "public");

module.exports = merge(base, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		port: 8081,
		open: "Firefox",
		contentBase: OUTPUT,
		historyApiFallback: true,
		proxy: {
			"/": "http://localhost:8081/index.html",
		},
	},
	module: {
		rules: [
			{
				test: /\.less/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
		],
	},
});
