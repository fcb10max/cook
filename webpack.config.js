const prod = process.env.NODE_ENV === "production";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: prod ? "production" : "development",
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/dist/",
		publicPath: "/",
		filename: "bunde.[hash].js",
		clean: true,
	},
	devServer: {
		static: path.resolve(__dirname, "./dist"),
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"],
				},
				use: "ts-loader",
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader',
		}
		],
	},
	devtool: prod ? undefined : "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			minify: {
				html5: true,
				collapseWhitespace: true,
				useShortDoctype:true,
			}
		})
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
};