// const purgecss = [
// 	'@fullhuman/postcss-purgecss',
// 	{
// 		content: ['./components/**/*.tsx', './pages/**/*.tsx'],
// 		defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// 	}
// ];
module.exports = {
	plugins: [
		'tailwindcss',
		'autoprefixer',
		'postcss-flexbugs-fixes'[
			// ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
			('postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009'
				},
				stage: 3,
				features: {
					'custom-properties': false
				}
			})
		]
	]
};
