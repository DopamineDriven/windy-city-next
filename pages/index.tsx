import Meta from '../components/meta';
import { Fragment } from 'react';
import { MediaContextProvider } from 'components/window-width';
const Index = () => {
	return (
		<Fragment>
			<MediaContextProvider>
				<Meta />
				<div className='dark:text-white dark:bg-black text-black'>True</div>
			</MediaContextProvider>
		</Fragment>
	);
};

export default Index;
