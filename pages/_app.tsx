import 'styles/index.css';
import '@tailwindcss/typography';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement } from 'react';

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

export default App;
