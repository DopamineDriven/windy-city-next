import useDarkMode, { DarkMode } from 'use-dark-mode';
import { Media } from 'components/window-width';
import DarkModeSwitch from 'components/lead-dark-icons';
import { Fragment } from 'react';

const LeadDarkModeConditional = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();

	const DarkMobile = (): JSX.Element => {
		return darkMode.value === true ? (
			<Media lessThan='md'>
				<DarkModeSwitch
					onChange={darkMode.toggle}
					checked={true}
					className='fill-primary text-primary stroke-current outline-none transform transition-colors rotate-290'
					width='9vw'
					height='9vw'
				/>
			</Media>
		) : (
			<Media lessThan='md'>
				<DarkModeSwitch
					onChange={darkMode.toggle}
					checked={false}
					className='fill-current text-primary text-customTitle stroke-current transition-colors transform outline-none rotate-855'
					width='9vw'
					height='9vw'
				/>
			</Media>
		);
	};

	const DarkDesktop = (): JSX.Element => {
		return darkMode.value === true ? (
			<Media greaterThanOrEqual='md'>
				<DarkModeSwitch
					onChange={darkMode.toggle}
					checked={true}
					className='fill-primary text-primary stroke-current outline-none transform transition-colors rotate-290'
					width='6.5vw'
					height='6.5vw'
				/>
			</Media>
		) : (
			<Media greaterThanOrEqual='md'>
				<DarkModeSwitch
					onChange={darkMode.toggle}
					checked={false}
					className='fill-current text-primary text-customTitle stroke-current transition-colors transform outline-none rotate-855'
					width='6vw'
					height='6vw'
				/>
			</Media>
		);
	};

	return (
		<Fragment>
			<div className='align-top inline-block md:transform md:-translate-y-portfolioDivider'>
				<DarkMobile />
				<DarkDesktop />
			</div>
		</Fragment>
	);
};

export default LeadDarkModeConditional;
