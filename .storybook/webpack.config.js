module.exports = ({ config }) => {
	config.resolve.extensions.push('.tsx')

	config.module.rules.push({
		test: /\.tsx?$/,
		use: [
			{
				loader: 'babel-loader',
			},
		],
	})
	return config
}
