import { CSSProperties } from 'react';
interface SvgIconConstituentValues {
	strokeColor?: string[];
	strokeWidth?: string[];
	strokeFill?: string[];
	fillColor?: string[];
	imageWidth?: string;
  imageHeight?: string;
  rectWidth?: string;
  rectHeight?: string;
  rectX?: string;
  rectY?: string;
  circWidth?: string;
  circHeight?: string;
  circX?: string;
  circY?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
  classNames?: string[];
  style0?: CSSProperties;
  style1?: CSSProperties;
}

export default SvgIconConstituentValues;

// Variadic Tuple Types
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/

/*
interface SvgIconConstituentValues {
	strokeColor?: string[];
	strokeWidth?: string[];
	strokeFill?: string[];
	fillColor?: string[];
	imageWidth?: string;
	imageHeight?: string;
	width?: string;
	height?: string;
	rotateCenter?: number;
	className?: string[];
}

export default SvgIconConstituentValues;

// Variadic Tuple Types
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/
*/
