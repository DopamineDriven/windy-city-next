import { createMedia } from '@artsy/fresnel';

const PortfolioMedia = createMedia({
	breakpoints: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	}
});

export const mediaStyles = PortfolioMedia.createMediaStyle();

export const { Media, MediaContextProvider } = PortfolioMedia;

// https://github.com/artsy/fresnel/tree/master/examples/nextjs
// https://tailwindcss.com/docs/breakpoints
