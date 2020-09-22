import Head from 'next/head';
import Lead from 'components/lead';
import { Fragment } from 'react';
import { MediaContextProvider } from 'components/window-width';
import { CLIENT_NAME } from 'lib/constants';
const Index = () => {
	return (
		<Fragment>
			<MediaContextProvider>
				<Lead />
				<Head>
					<title>{`${CLIENT_NAME} landing page`}</title>
				</Head>
				<div className='dark:text-white dark:bg-black text-black'>True</div>
			</MediaContextProvider>
		</Fragment>
	);
};

export default Index;
