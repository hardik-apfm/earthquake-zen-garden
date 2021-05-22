const path = require("path");

const app_dir = path.resolve(__dirname, '/src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: app_dir + '/index.html',
	filename: 'index.html',
	inject: 'body'
});

const config = {
	mode: 'development',
	devtool: "inline-source-map",
	entry: app_dir + '/app.tsx',
	output: {
		path: __dirname + '/dist',
		filename: 'app.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.s(a|c)ss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							compileType: "module",
							localIdentName: "[path][name]__[local]", // to identify to which component css belongs.
							localIdentContext: path.resolve(__dirname, "src"),
							exportOnlyLocals: false,
						},
					}
				},
				'sass-loader'
			]
		}, {
			test: /\.tsx?$/,
			loader: "ts-loader",
			exclude: /(node_modules)/
		},
			{
				test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				exclude: [/node_modules/],
				loader: "file-loader"
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: [/node_modules/],
				loader: "file-loader"
			},
			{
				test: /\.(pdf)$/i,
				exclude: [/node_modules/],
				loader: "file-loader",
				options: {
					name: '[name].[ext]',
				},
			},
		]
	},
	plugins: [HTMLWebpackPluginConfig],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	devServer: {
		port: 8080,
		// open: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
	},
};
module.exports = config;