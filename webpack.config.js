var path = require('path');
module.exports = {
	entry: [
		'./src/js/main.ts'
	],
	output: {
		publicPath: '/',
		path: path.resolve("./dist"),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test:/\.ts$/, loader: 'ts-loader'},
			{test:/\.png$/, loader: 'url-loader?limit=8192'},
			{test:/\.wav$/, loader: 'url-loader?limit=8192'},
			{test:/\.less$/, loader: 'style!css!less'},
			{test:/.json$/, loader:'json'}
		]
	}
};