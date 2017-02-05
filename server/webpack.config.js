var path = require('path');
var webpack = require('webpack');

let development = {
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client?reload=true',
		'./client/index',
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
}

let production = {
	entry: './client/index',
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
}

let config = process.env.NODE_ENV === 'development '
	? development
	: production


module.exports = {
	entry: config.entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		publicPath: '/dist/'
  },
	module: {
    rules: [
	    {
	      test: /\.js$/,
	      use: 'babel-loader',
				exclude: /node_modules/
	    },
			{
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			},
			{
	    	test: /\.(jpe?g|png|gif|svg|wav|mp3)$/,
	    	use: [
					{
						loader: 'url-loader',
						options: { limit: 40000}
					},
					'image-webpack-loader'
				]
	    }
    ]
  },
	resolve: {
		alias: {
			soundmanager2: 'soundmanager2/script/soundmanager2-nodebug-jsmin.js'
		},
	},
  plugins: config.plugins,
}
