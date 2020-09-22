import { CSSProperties } from 'react';

export type strokeLinecapTypes = 'round' | 'inhert' | 'butt' | 'square';

export enum strokeLinecapEnum {
	round = 'round',
	butt = 'butt',
	square = 'square',
	inherit = 'inherit'
}
export default interface SvgDarkModeShape {
	strokeColor?: string[];
	strokeWidths?: string[];
	strokeFill?: string[];
	fillColor?: string[];
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	className0?: string;
	className1?: string;
	className2?: string;
	className3?: string;
	className4?: string;
	className5?: string;
	style1?: CSSProperties;
	style2?: CSSProperties;
	style3?: CSSProperties;
	strokeLinecaps?: strokeLinecapTypes[];
	strokeLinejoins?: string[];
	cx?: string;
	cy?: string;
	r?: string;
	onClick?: () => void;
}
