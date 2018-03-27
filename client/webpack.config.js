
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '/dist')

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./index.js',
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};
            
