import { WcdIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Media } from 'components/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';

const ArIconConditional = (): JSX.Element => {
	const arIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container block transform transition-transform translate-x-aboutHackingFontAwesomePT py-portfolio justify-center mx-auto w-full min-w-full'
					id='top'
					aria-label='top'
				>
					<WcdIcon width='18vw' height='18vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconSm: JSX.Element = (
		<Media at='sm'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<WcdIcon width='15vw' height='15vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconMd: JSX.Element = (
		<Media at='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full '
					id='top'
					aria-label='top'
				>
					<WcdIcon width='12.5vw' height='12.5vw' />
				</a>
			</Link>
		</Media>
	);

	const arIconDesktop: JSX.Element = (
		<Media greaterThan='md'>
			<Link href='/'>
				<a
					className='container block pl-portfolio pt-portfolio justify-between mx-auto w-full min-w-full'
					id='top'
					aria-label='top'
				>
					<WcdIcon
						width='10vw'
						height='10vw'
						classNames={[
							` antialised w-svgIcon max-w-svgIcon transform transition-all`,
							'  stroke-current',
							` fill-primary`
						]}
					/>
				</a>
			</Link>
		</Media>
	);

	const DarkModeToggler = (): JSX.Element => (
		<div className='md:pt-portfolio md:text-customTitle transition-all transform md:-translate-y-mdmxSocial translate-y-portfolioLSMobile col-span-4 text-right -translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	);

	const ArIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative block justify-between lg:w-auto lg:static lg:block lg:justify-start transition-all w-full min-w-full col-span-2'>
				{arIconXs}
				{arIconSm}
				{arIconMd}
				{arIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='select-none relative z-1 justify-between pt-portfolioDivider navbar-expand-lg grid grid-cols-6 min-w-full w-full container overflow-y-hidden overflow-x-hidden transform'>
				<ArIconsCoalesced />
				<DarkModeToggler />
			</div>
		</Fragment>
	);
};

export default ArIconConditional;
