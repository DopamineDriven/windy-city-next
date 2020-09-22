import useDarkMode, { DarkMode } from 'use-dark-mode';
import useClient from 'lib/isClient';
import { Fragment } from 'react';
import LeadDarkModeConditional from 'components/lead-dark-mode-conditional';

const LeadDarkModeToggle = (): JSX.Element => {
	const darkMode: DarkMode = useDarkMode();
	const isClient = useClient();

	const Conditional = (): JSX.Element => {
		return isClient ? (
			<div className='block outline-none transition-all transform container pr-portfolio justify-between mx-auto w-full min-w-full translate-y-portfolioLS'>
				<button
					type='button'
					onClick={darkMode.value === true ? darkMode.disable : darkMode.enable}
					className=' fill-primary text-primary stroke-current outline-none'
				>
					<Fragment>
						{/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
						<LeadDarkModeConditional />
					</Fragment>
				</button>
			</div>
		) : (
			<span>...</span>
		);
	};

	return <Conditional />;
};

export default LeadDarkModeToggle;

// https://github.com/donavon/use-dark-mode/blob/develop/types/index.d.ts
