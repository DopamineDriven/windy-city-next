import 'styles/index.css';
// import '@tailwindcss/typography';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ReactElement } from 'react';

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}

function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />;
}

export default App;