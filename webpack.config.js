const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/rbs-loader.js',
    devtool: 'inline-source-map',
    module: {
	rules: [
	    {
		test: /\.js?$/,
		use: 'babel-loader',
		exclude: /node_modules/,
	    },
	],
    },
    resolve: {
	extensions: [ '.js' ],
    },
    output: {
	filename: 'index.js',
	path: path.resolve(__dirname, 'dist'),
	libraryTarget: 'umd'
    },
};
