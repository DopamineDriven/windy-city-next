const purgecss = [
	'@fullhuman/postcss-purgecss',
	{
		// Specify the paths to all of the template files
		content: ['./pages/**/*.tsx', './components/**/*.tsx'],
		// function to extract class names from the templates
		defaultExtractor: content => {
			// Capture as liberally as possible, including things like `h-(screen-1.5)`
			const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
			// Capture classes within other delimiters like .block(class="w-1/2") in Pug
			const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];
			return broadMatches.concat(innerMatches);
		}
	}
];

module.exports = {
	plugins: [
		'tailwindcss',
		'autoprefixer',
		'postcss-flexbugs-fixes',
		...(process.env.NODE_ENV === 'production' ? purgecss : undefined),
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
