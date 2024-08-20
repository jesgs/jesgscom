const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: [
			__dirname + '/src/index.js',
            __dirname + '/src/css/landing.css',
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
            {
				test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
		],
	},
    optimization: {
		minimizer: [new CssMinimizerPlugin()],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
	],
};
