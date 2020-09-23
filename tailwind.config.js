// const plugin = require('tailwindcss/plugin')

module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: {
		content: ['./components/**/*.tsx', './pages/**/*.tsx'],
		options: {
			whiteList: ['dark-mode', 'light-mode']
		}
	},
	theme: {
		debugScreens: {
			position: ['bottom', 'left'],
			ignore: ['dark']
		},
		letterSpacing: {
			tightest: '-.075em',
			tighter: '-.024em',
			tight: '-0.01em',
			wide: '.025em',
			wider: '.05em',
			widest: '.15em'
		},
		rotate: {
			0: '0deg',
			40: '40deg',
			45: '45deg',
			125: '125deg',
			180: '180deg',
			290: '310deg',
			855: '845deg'
		},
		opacity: {
			10: '10',
			25: '25',
			50: '50',
			75: '75',
			90: '90',
			100: '100'
		},
		zIndex: {
			0: 0,
			1: 1,
			2: 2,
			50: 50,
			75: 75,
			100: 100
		},
		// scrollBehavior: {
		// 	immediately: 'auto',
		// 	smoothly: 'smooth'
		// },
		extend: {
			screens: {
				light: { raw: '(prefers-color-scheme: light)' },
				dark: { raw: '(prefers-color-scheme: dark)' }
			},
			transitionDuration: {
				0: '0ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
				2000: '2000ms',
				3000: '3000ms',
				10000: '10000ms'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				hero: {
					transform: 'translate3d(0px, 0px, 0px)'
				}
			},
			animation: {
				wiggle: 'wiggle 10s ease-in-out infinite',
				hero: 'hero 1s ease-in-out infinite',
				slowPing: 'pulse 10s cubic-bezier(0, 0, 0.2, 1) infinite'
			},
			fontFamily: {
				head: ['goudy-bookletter-1911', 'serif'],
				// header: ['Playfair Display', 'serif'],
				// body: ['Barlow Condensed', 'sans-serif'],
				// display: ['Barlow Condensed', 'sans-serif'],
				// polished: ['brandon-grotesque', 'sans-serif'],
				somaRoman: ['neue-haas-grotesk-text', 'sans-serif'],
				somaDisplay: ['neue-haas-grotesk-display', 'sans-serif']
				// somaDisplayLight: ['neue-haas-grotesk-display', 'sans-serif']
				// subpolished: ['Montserrat', 'sans-serif']
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				auxiliary: 'var(--color-bg-auxiliary)'
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				auxiliary: 'var(--color-text-auxiliary)',
				tertiary: 'var(--color-text-tertiary)',
				quaternary: 'var(--color-text-quaternary)'
			},
			borderColor: {
				primary: 'var(--color-border-primary)'
			},
			fill: {
				primary: 'var(--color-fill-primary)',
				auxiliary: 'var(--color-fill-auxiliary)'
			},
			strokeColor: {
				primary: 'var(--color-stroke-primary)'
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				black: '#000000',
				white: '#ffffff',
				success: '#0070f3',
				cyan: '#79FFE1',
				blizzardBlue: '#b3ddf2',
				chicagoRed: '#ff0000',
				cimaRed: '#B8242C',
				wcdPink: '#eb57a3',
				tinyHouseWhite: '#f0f1f2',
				customGray: '#D0D0D0',
				iconHover: '#9D9D9D',
				iconHoverTwo: '#AEAEAE',
				tailwindBlue: '#2298BD',
				tailwindGreen: '#0ED7B5',
				bloodMoon: '#cc6633',
				herokuStroke: '#6762A6',
				gqlPink: '#E535AB',
				devPurple: '#3333CC',
				lighterBlack: '#323232',
				gatsbyPurple: '#663399',
				oneFiveBlack: '#151515',
				eaWhite: '#EAEAEA',
				afWhite: '#AFAFAF',
				fiveOBlack: '#505050',
				portfolio: '#EBE8E0',
				portfolioComplementary: '#E5E0EB',
				portfolioDark: '#14171F',
				everythingIsBlue: '#007acc'
			},
			height: {
				whole: '100vh',
				nineTenths: '90vh',
				sevenEighths: '87.5vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				sevenTenths: '70vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh',
				oneTenth: '10vh',
				oneTwentieth: '5vh',
				imagePortfolio: '31.25vh'
			},
			maxHeight: {
				whole: '100vh',
				nineTenths: '90vh',
				sevenEighths: '87.5vh',
				fourFifths: '80vh',
				threeFourths: '75vh',
				sevenTenths: '70vh',
				twoThirds: '66.67vh',
				threeFifths: '60vh',
				half: '50vh',
				nineTwentieths: '45vh',
				twoFifths: '40vh',
				sevenTwentieths: '35vh',
				oneThird: '33.33vh',
				threeTenths: '30vh',
				oneFourth: '25vh',
				oneFifth: '20vh',
				oneSixth: '16.67vh',
				oneTenth: '10vh',
				oneTwentieth: '5vh',
				imagePortfolio: '61.25vh'
			},
			width: {
				whole: '100vw',
				nineTenths: '90vw',
				sevenEighths: '87.5vw',
				fourFifths: '80vw',
				threeFourths: '75vw',
				sevenTenths: '70vw',
				twoThirds: '66.67vw',
				threeFifths: '60vw',
				half: '50vw',
				nineTwentieths: '45vw',
				twoFifths: '40vw',
				sevenTwentieths: '35vw',
				oneThird: '33.33vw',
				threeTenths: '30vw',
				oneFourth: '25vw',
				oneFifth: '20vw',
				oneSixth: '16.67vw',
				oneTenth: '10vw',
				oneTwentieth: '5vw',
				82: '20.5rem',
				100: '25rem',
				150: '37.5rem',
				portfolio: '2.25vw',
				portfolioLS: '3.33vw',
				portfolioRS: '1.33vw',
				gapX: '2.2284vw',
				imagePortfolio: '41.7827vw',
				imagePortfolioMobile: '83.5654vw',
				portfolioPadding: '7.1031vw',
				portfolioMTP: '-0.83333vw',
				socialMargin: '-0.5vw',
				portfolioS: '18.60284vw',
				svgIcon: '18.0556vw',
				socialT: '74.58333vw',
				cardGrid: '85.7939vw',
				cardGridMobile: '91.1111vw',
				aboutImage300: '20.8914vw',
				aboutImage400: '27.8552vw',
				aboutImage500: '34.8181vw',
				aboutImage600: '41.7827vw',
				portfolioDividerWidth: '93.333vw'
			},
			maxWidth: {
				whole: '100vw',
				nineTenths: '90vw',
				sevenEighths: '87.5vw',
				fourFifths: '80vw',
				threeFourths: '75vw',
				sevenTenths: '70vw',
				twoThirds: '66.67vw',
				threeFifths: '60vw',
				half: '50vw',
				nineTwentieths: '45vw',
				twoFifths: '40vw',
				sevenTwentieths: '35vw',
				oneThird: '33.33vw',
				threeTenths: '30vw',
				oneFourth: '25vw',
				oneFifth: '20vw',
				oneSixth: '16.67vw',
				oneTenth: '10vw',
				oneTwentieth: '5vw',
				82: '20.5rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				275: '69.25rem',
				300: '75rem',
				308: '77rem',
				portfolio: '2.25vw',
				portfolioLS: '3.33vw',
				portfolioRS: '1.33vw',
				gapX: '2.2284vw',
				imagePortfolio: '41.7827vw',
				imagePortfolioMobile: '83.5654vw',
				portfolioPadding: '7.1031vw',
				portfolioMTP: '-0.83333vw',
				socialMargin: '-0.5vw',
				portfolioS: '18.60284vw',
				svgIcon: '18.0556vw',
				socialT: '74.58333vw',
				cardGrid: '85.7939vw',
				cardGridMobile: '91.1111vw',
				aboutImage300: '20.8914vw',
				aboutImage400: '27.8552vw',
				aboutImage500: '34.8181vw',
				aboutImage600: '41.7827vw',
				portfolioDividerWidth: '93.333vw'
			},
			spacing: {
				negative: '-0.1em',
				half: '0.125rem',
				threeQuarters: '0.175rem',
				threeHalves: '0.325rem',
				portfolio: '2.25vw',
				portfolioH2F: '3.25vw',
				portfolioLS: '3.33vw',
				portfolioLSMobile: '3.88vw',
				portfolioRS: '1.33vw',
				portfolioDivider: '0.875vw',
				gapX: '2.2284vw',
				offsetY: '7.5209vw',
				mobileGapY: '7.3333vw',
				imagePortfolio: '41.7827vw',
				portfolioPadding: '7.1031vw',
				aboutIndentation: '9.1031vw',
				portfolioFooter: '3.33vw',
				portfolioMTP: '-0.83333vw',
				socialMargin: '-0.5vw',
				portfolioS: '18.60284vw',
				socialT: '74.58333vw',
				aboutGapX: '8.9136vw',
				aboutOffsetPR: '43.79944vw',
				aboutOffsetPRMobile: '37.79944vw',
				introToPortfolioMobile: '32.79944vw',
				aboutHackingFontAwesomePT: '6.6852vw',
				paddingBlog: '26.25vw',
				paddingBlogOdd: '17.5vw',
				paddingPostTitleTop: '5.5vw',
				paddingPostTitleBottom: '3.75vw',
				paddingAboutTitleRight: '10.75vw',
				paddingAboutTitleRightMobile: '14.75vw',
				mxSocial: '1.25vw',
				mdmxSocial: '0.625vw',
				landingOverviewTranslation: '7.75vw',
				7: '1.75rem',
				14: '3.5rem',
				18: '4.5rem',
				25: '6.25rem',
				26: '6.5rem',
				28: '7rem',
				44: '11rem',
				82: '20.5rem',
				100: '25rem',
				150: '37.5rem',
				200: '50rem',
				250: '62.5rem',
				275: '69.25rem',
				300: '75rem',
				308: '77rem',
				309: '77.25rem'
			},
			lineHeight: {
				superpressed: 0.3,
				pressed: 0.6,
				tight: 1.2,
				chillin: 1.8,
				portfolio: '5vw',
				headerAbout: '3.38298vw',
				headerP: '4.38298vw',
				customSLH: '5.33333vw',
				customSLM: '6.33333vw',
				leadingAboutMobile: '3.58298vw'
			},
			fontSize: {
				onehalf: '0.5rem',
				smxmd: '0.9375rem',
				'1xl': '1.0rem',
				threehalves: '1.25rem',
				'3xl': '2.0rem',
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
				'10xl': '10rem',
				custom: '25.41667vw',
				customWcd: '13.41667vw',
				customWcdMobile: '10.11667vw',
				customPMobile: '4.44681vw',
				customP: '3.2234vw',
				customS: '2.06667vw',
				customFooter: '1.16667vw',
				customFooterMobile: '2.63333vw',
				customSM: '3.36667vw',
				customSMobile: '4.36667vw',
				customTitle: '2.22341vw',
				customExcerpt: '1.66755vw',
				customTitleMobile: '4.44682vw',
				customExcerptMobile: '3.0351vw',
				customAboutTitle: '15.9276vw',
				customAboutText: '3.3426vw',
				customAbout: '23.41667vw',
				customPostAbout: '7.5666vw',
				customPostBlog: '7.7666vw',
				customSubPostTitle: '11.9276vw',
				customSubPostTitleModified: '8.9276vw',
				customAboutSubMobile: '2.63333vw',
				customBlogSupraTitle: '8.9276vw'
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
			}
		},
		darkSelector: '.dark',
		lightSelector: '.light'
	},
	variants: {
		padding: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
		fontSize: ['responsive', 'last', 'first', 'hover', 'focus', 'even', 'odd'],
		animation: ['responsive', 'hover', 'focus', 'motion-safe', 'motion-reduce'],
		transitionProperty: [
			'responsive',
			'hover',
			'focus',
			'motion-safe',
			'motion-reduce'
		]
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-textshadow'),
		require('tailwindcss-debug-screens'),
		require('tailwindcss-dark-mode')(),
		function ({ addBase, config }) {
			addBase({
				body: {
					color: config('theme.colors.black'),
					backgroundColor: config('theme.colors.white')
				},
				'@screen dark': {
					body: {
						color: config('theme.colors.white'),
						backgroundColor: config('theme.colors.black')
					}
				}
			});
		}
	]
};

// https://tailwindcss.com/docs/configuration#core-plugins