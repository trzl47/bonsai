const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const browserConfig = {
	entry: './src/index.js',
	devtool: devMode ? 'cheap-module-source-map' : 'source-map',
	target: 'web',
	mode: devMode ? 'development' : 'production',
	output: {
		path: devMode ? path.resolve(__dirname, 'build/client-dev') : path.resolve(__dirname, 'build/client'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			// {
			//   test: /\.(png|jpg|gif)$/,
			//   use: [
			//     {
			// 			loader: 'url-loader',
			//       options: {
			// 				limit: 8192,
			// 				fallback: 'file-loader'
			//       }
			//     }
			//   ]
			// },
			{
				test: /\.(ttf|woff|woff2|eot|svg|ico|png|jpg)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							// name: devMode ? '[path][name].[ext]' : '[name][hash].[ext]',
							name: '[path][name].[ext]',
							// useRelativePath: true
						}
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	watchOptions: {
		ignored: /node_modules/,
		aggregateTimeout: 300,
		poll: 1000,
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
			'process.env':{
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'VHOST': JSON.stringify(process.env.VHOST),
				'PORT': JSON.stringify(process.env.PORT)
			}
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
			// favicon: './src/favicon/favicon-96x96.png',
			favicon: './src/img/logo.svg'
		}),

		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
	],
};

// const serverConfig = {
// 	entry: './src/server.js',
// 	devtool: devMode ? 'cheap-module-source-map' : 'source-map',
// 	target: 'node',
// 	mode: devMode ? 'development' : 'production',
// 	output: {
// 		path: devMode ? path.resolve(__dirname, 'build/server-dev') : path.resolve(__dirname, 'build/server'),
// 		filename: 'bundle.js',
// 		publicPath: '/',
// 	},
// 	externals: (context, request, callback) => {
// 		if (/^[a-z0-9-][a-z0-9-./]+$/.test(request)) {
// 			return callback(null, `commonjs ${request}`);
// 		}
// 		callback();
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(js|jsx)$/,
// 				exclude: /node_modules/,
// 				use: 'babel-loader',
// 			},
// 			{
// 				test: /\.(ttf|woff|woff2|eot|svg|ico|png|jpg)?$/,
// 				use: ['file-loader'],
// 			},
// 			{
// 				test: /\.s?[ac]ss$/,
// 				use: [
// 					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
// 					'css-loader',
// 				],
// 			},
// 			{
// 				test: /\.html$/,
// 				use: [
// 					{
// 						loader: 'html-loader',
// 						options: { minimize: true },
// 					},
// 				],
// 			},
// 		],
// 	},
// 	resolve: {
// 		extensions: ['.js', '.jsx'],
// 	},
// 	watchOptions: {
// 		ignored: /node_modules/,
// 		aggregateTimeout: 300,
// 		poll: 1000,
// 	},
// 	plugins: [
// 		new webpack.DefinePlugin({
// 			__isBrowser__: 'false',
// 		}),
// 		new HtmlWebPackPlugin({
// 			template: './src/index.html',
// 			filename: './index.html',
// 		}),
// 		new MiniCssExtractPlugin({
// 			filename: devMode ? '[name].css' : '[name].[hash].css',
// 		}),
// 	],
// 	node: {
// 		console: false,
// 		global: false,
// 		process: false,
// 		Buffer: false,
// 		__filename: false,
// 		__dirname: false,
// 		setImmediate: false,
// 	},
// };

module.exports = [
	browserConfig,
	// serverConfig
];