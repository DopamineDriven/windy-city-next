import ReactGA, { EventArgs } from 'react-ga';

export const gaInit = (): void => {
	ReactGA.initialize(`UA-${process.env.GA_TRACKING_ID}`);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages#top_of_page
export const pageview = (url: string) => {
	ReactGA.ga('config', process.env.GA_TRACKING_ID, {
		page_path: url
	});
};

export const logPageView = (): void => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname + window.location.search);
};

export const event = ({ action, category, label, value }: EventArgs): void => {
	ReactGA.event({
		action,
		category,
		label,
		value
	});
};

// https://coderrocketfuel.com/article/add-google-analytics-to-a-next-js-and-react-website
// https://github.com/react-ga/react-ga
