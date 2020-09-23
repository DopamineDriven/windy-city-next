import { Fragment } from 'react';
import Meta from 'components/meta';
import LeadIcon from 'components/lead-wcdIcon';
import LeadSpan from 'components/lead-span';
import LeadSocial from 'components/lead-social';
import LeadTitle from 'components/lead-title';
// import { Toggle } from 'components/lead-toggle';

const Lead = (): JSX.Element => {
	return (
		<Fragment>
			<Meta />
			<header
				className='select-none relative z-1 justify-between pt-portfolio navbar-expand-lg flex flex-col min-w-full w-full container overflow-y-hidden overflow-x-hidden transform pb-introToPortfolioMobile md:pb-portfolioPadding'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<LeadIcon />
				<LeadTitle />
				<LeadSpan />
				<LeadSocial />
			</header>
		</Fragment>
	);
};

export default Lead;

// USE
// https://fossheim.io/writing/posts/react-text-splitting-animations/
