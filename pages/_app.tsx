import 'styles/index.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement, useEffect } from 'react';
import { useRouter, NextRouter } from 'next/router';
import { gaInit, logPageView } from 'lib/google-analytics';
import {
	ApolloProvider,
	NormalizedCacheObject,
	ApolloClient
} from '@apollo/client';
import { useApollo } from 'lib/apollo';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps): ReactElement {
	const apolloClient: ApolloClient<NormalizedCacheObject> = useApollo(
		pageProps.initializeApollo
	);
	const router: NextRouter = useRouter();
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
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/_app.js
