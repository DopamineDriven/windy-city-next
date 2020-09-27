import Head from 'next/head';
import Lead from 'components/lead';
import Footer from 'components/footer';
import { Fragment } from 'react';
import { MediaContextProvider } from 'lib/window-width';
import { CLIENT_NAME } from 'lib/constants';
const Index = () => {
	return (
		<Fragment>
			<MediaContextProvider>
				<Lead />
				<Head>
					<title>{`${CLIENT_NAME} landing page`}</title>
				</Head>
				<Footer />
			</MediaContextProvider>
		</Fragment>
	);
};

export default Index;

//  ${debugScreensDev}