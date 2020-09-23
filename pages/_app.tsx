import 'styles/index.css';
import '@tailwindcss/typography';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from 'lib/google-analytics';
import ReactGA from 'react-ga';

export const gaInit = () => {
	ReactGA.initialize(`UA-${process.env.GA_TRACKING_ID}`);
};

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps): ReactElement {
	const router = useRouter();
	const { logPageView, gaInit } = gtag;
	useEffect(() => {
		gaInit();
		const handleRouteChange = () => {
			logPageView();
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;

// Configuring Fortawesome with nextjs v9+
// https://github.com/UnlyEd/next-right-now/blob/master/src/pages/_app.tsx
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project

/*
	const router = useRouter();
	const { pageview } = gtag;
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);
	return <Component {...pageProps} />;
}
*/
