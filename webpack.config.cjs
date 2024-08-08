module.exports = {
	mode: 'production',
	entry: {
		index: [
			__dirname + '/src/index.js',
		],
	},
	output: {
		path: __dirname + '/public/assets/scripts/dist',
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(?:js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-react', { targets: 'defaults' }],
						],
					},
				},
			},
		],
	},
};
