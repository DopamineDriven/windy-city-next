module.exports = {
	plugins: [
		'tailwindcss',
		'autoprefixer',
		'postcss-flexbugs-fixes',
		// ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009'
				},
				stage: 3,
				features: {
					'custom-properties': false
				}
			}
		]
	]
};