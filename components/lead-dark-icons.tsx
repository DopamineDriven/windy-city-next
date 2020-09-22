import { useSpring, animated } from 'react-spring';
import { CSSProperties, useMemo, FC } from 'react';

export const defaultProperties = {
	dark: {
		circle: {
			r: 9
		},
		mask: {
			cx: '50%',
			cy: '23%'
		},
		svg: {
			transform: 'rotate(deg)'
		},
		lines: {
			opacity: 0
		}
	},
	light: {
		circle: {
			r: 5
		},
		mask: {
			cx: '50%',
			cy: '0%'
		},
		svg: {
			transform: 'rotate(90deg)'
		},
		lines: {
			opacity: 1
		}
	},
	springConfig: { mass: 4, tension: 250, friction: 35 }
};

interface Props {
	onChange: (checked: boolean) => void;
	checked: boolean;
	style?: CSSProperties;
	width?: string;
	height?: string;
	animationProperties?: typeof defaultProperties;
	moonColor?: string;
	sunColor?: string;
	className?: string;
	r1?: string;
	r2?: string;
}

const DarkModeSwitch: FC<Props> = (props): JSX.Element => {
	const {
		onChange,
		children,
		checked = false,
		width = '4vw',
		height = '4vw',
		animationProperties = defaultProperties,
		moonColor = 'white',
		sunColor = '',
		style,
		r1 = '0',
		r2 = '11',
		className = ' text-primary fill-primary stroke-current outline-none transform transition-all rotate-855',
		...rest
	} = props;
	const properties = useMemo(() => {
		if (animationProperties !== defaultProperties) {
			return Object.assign(defaultProperties, animationProperties);
		}

		return animationProperties;
	}, [animationProperties]);

	const { circle, svg, lines, mask } = properties[checked ? 'dark' : 'light'];

	const svgContainerProps = useSpring({
		...svg,
		config: animationProperties.springConfig
	});
	const centerCircleProps = useSpring({
		...circle,
		config: animationProperties.springConfig
	});
	const maskedCircleProps = useSpring({
		...mask,
		config: animationProperties.springConfig
	});
	const linesProps = useSpring({
		...lines,
		config: animationProperties.springConfig
	});

	const toggle = () => {
		if (!checked) onChange(checked);
	};

	return (
		<animated.svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			color={checked ? moonColor : sunColor}
			fill='none'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			stroke='currentColor'
			className={className}
			onClick={toggle}
			style={{
				cursor: 'pointer',
				...svgContainerProps,
				...style
			}}
			{...rest}
		>
			<mask id='myMask2'>
				<rect x='0' y='0' width='100%' height='100%' fill='white' />
				<animated.circle
					// @ts-ignore
					style={maskedCircleProps}
					r={checked ? r2 : r1}
					fill='black'
					className=''
				/>
			</mask>

			<animated.circle
				cx='12'
				cy='12'
				fill={checked ? moonColor : sunColor}
				// @ts-ignore
				style={centerCircleProps}
				mask='url(#myMask2)'
			/>
			<animated.g stroke='currentColor' style={linesProps} className=''>
				<line x1='12' y1='1' x2='12' y2='3' />
				<line x1='12' y1='21' x2='12' y2='23' />
				<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
				<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
				<line x1='1' y1='12' x2='3' y2='12' />
				<line x1='21' y1='12' x2='23' y2='12' />
				<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
				<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
			</animated.g>
		</animated.svg>
	);
};

export default DarkModeSwitch;

// import SvgDarkModeShape from 'types/dark-toggle';
// import { MouseEvent, FC, useState } from 'react';
// // import { strokeLinecapEnum } from '../types/dark-toggle';
// import { useSpring, animated } from 'react-spring';
// import useDarkMode, { DarkMode } from 'use-dark-mode';
// import useClient from 'lib/isClient';
// import Toggle from 'components/lead-toggle';

// export const defaultProperties = {
// 	sun: {
// 		r: 9,
// 		transform: 'rotate(40deg)',
// 		cx: 12,
// 		cy: 4,
// 		opacity: 0
// 	},
// 	moon: {
// 		r: 5,
// 		transform: 'rotate(90deg)',
// 		cx: 30,
// 		cy: 0,
// 		opacity: 1
// 	}
// };

// const SunIcon: FC<SvgDarkModeShape> = (props): JSX.Element => {
// 	const darkMode: DarkMode = useDarkMode();
// 	const isClient = useClient();
// 	const [isDarkMode, setDarkMode] = useState(false);

// 	const toggleDarkMode = () => {
// 		setDarkMode(checked => !checked);
// 		// return (
// 		// 	<Toggle checked={darkMode.value} onChange={darkMode.toggle} />
// 		// )
// 	};

// 	const { r, transform, cx, cy, opacity } = defaultProperties ? [
// 		isDarkMode ? "dark" : "light"
// 	];

// 	const svgContainerProps = useSpring({ transform });
// 	const centerCircleProps = useSpring({ r });
// 	const maskedCircleProps = useSpring({ cx, cy });
// 	const linesProps = useSpring({ opacity });
// 	const {
// 		height = '24',
// 		width = '24',
// 		rotateCenter = 0,
// 		fillColor = [],
// 		strokeColor = [],
// 		className0 = ' transform transition rotate-40 cursor-pointer',
// 		className1 = ` stroke-current ${strokeColor} antialiased fill-current`,
// 		className2 = ` stroke-current fill-current text-primary`,
// 		className3 = ` fill-current text-quaternary stroke-current`,
// 		strokeWidths = [],
// 		style1 = '',
// 		style2 = '',
// 		style3 = '',
// 		strokeLinecaps = [],
// 		strokeLinejoins = []
// 	} = props;
// 	const [fillColor1 = 'none', fillColor2 = ' white'] = fillColor;
// 	const [strokeColor1 = 'currentColor'] = strokeColor;
// 	const [strokeWidth1 = '2.0'] = strokeWidths;
// 	return (
// 		<svg
// 			xmlns='http://www.w3.org/2000/svg'
// 			width={width}
// 			height={height}
// 			viewBox='0 0 24 24'
// 			fill={fillColor1}
// 			stroke={strokeColor1}
// 			strokeWidth={strokeWidth1}
// 			strokeLinecap='round'
// 			strokeLinejoin='round'
// 			style={{ transform: 'rotate(40deg)', cursor: 'pointer' }}
// 			onClick={toggleDarkMode}
// 			className={className0}
// 		>
// 			<mask id='mask'>
// 				<rect x='0' y='0' width='100%' height='100%' fill='white' />
// 				<circle fill='black' cx='12' cy='4' r='9' />
// 			</mask>
// 			<circle fill='black' cx='12' cy='12' r='9' mask='url(#mask)' />
// 			{/* <g stroke={strokeColor1} className={className2}>
// 				<line x1='12' y1='1' x2='12' y2='3' />
// 				<line x1='12' y1='21' x2='12' y2='23' />
// 				<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
// 				<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
// 				<line x1='1' y1='12' x2='3' y2='12' />
// 				<line x1='21' y1='12' x2='23' y2='12' />
// 				<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
// 				<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
// 			</g> */}
// 		</svg>
// 	);
// };

// export default SunIcon;

/*
export const defaultProperties = {
	dark: {
		circle: {
			r: 9
		},
		mask: {
			cs: '50%',
			cy: '23%'
		},
		svg: {
			transform: 'rotate(40deg)'
		},
		lines: {
			opacity: 0
		}
	},
	light: {
		circle: {
			r: 5
		},
		mask: {
			cx: '100%',
			cy: '0%'
		},
		svg: {
			transform: 'rotate(90deg)'
		},
		lines: {
			opacity: 1
		}
	},
	springConfig: {
		mass: 4,
		tension: 250,
		friction: 35
	}
};
*/
