const path = require('path');
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
        assetModuleFilename: 'images/[name][ext][query]',
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
            },
            {
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
				type: 'asset',
			},
		],
	},
    resolve: {
		alias: {
			'/resources/assets/images/[name].png': path.resolve(
				__dirname,
				'public/images/[name].png'
			),
            '/resources/assets/images/[name].jpg': path.resolve(
				__dirname,
				'public/images/[name].jpg'
			),
			'/resources/assets/images/[name].mp4': path.resolve(
				__dirname,
				'public/images/[name].mp4'
			),
		},
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
