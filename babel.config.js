module.exports = {
	presets: [
		['@babel/preset-typescript', {
			'isTSX': true,
			'allExtensions': true,
		}],
		'@vue/babel-preset-jsx',
		['@babel/preset-env', false],
	],
	plugins: [
		['@babel/plugin-proposal-decorators', {
			legacy: true,
			loose: true,
		}],
		['@babel/proposal-class-properties', {
			loose: true,
		}],
	],
}
