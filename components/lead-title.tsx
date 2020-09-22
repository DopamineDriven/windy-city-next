import { Media } from 'components/window-width';
import { Fragment } from 'react';

const LeadTitle = (): JSX.Element => {
	const TitleMobile = (
		<Media lessThan='md'>
			<div className=''>
				<h1
					className='font-head text-custom relative inline-block text-center justify-center tracking-wider leading-headerP font-light cursor-default w-full min-w-full transform -translate-y-paddingPostTitleTop transition-all ease-in-out'
					style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
				>
					<a className='text-custom block'>Andrew</a>
				</h1>
			</div>
		</Media>
	);

	const TitleDesktop = (
		<Media greaterThanOrEqual='md'>
			<div className='tracking-wider'>
				<h1
					className='font-head text-custom relative flex-grow text-center justify-center tracking-wider leading-headerP font-light cursor-default w-full min-w-full transform -translate-y-paddingPostTitleTop transition-all ease-in-out'
					style={{ marginBlockStart: '0.67em', marginBlockEnd: '0.67em' }}
				>
					<a className='text-custom block'>Andrew</a>
				</h1>
			</div>
		</Media>
	);

	return (
		<Fragment>
			{TitleMobile}
			{TitleDesktop}
		</Fragment>
	);
};

export default LeadTitle;
