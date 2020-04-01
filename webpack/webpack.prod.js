const merge = require("webpack-merge");
const base = require("./webpack.dev");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.less/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
					"less-loader",
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style/[name].css",
			chunkFilename: "style/[id].css",
		}),
	],
});
