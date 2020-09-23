import { WcdIcon, WindyCityDevsIcon } from 'components/svg-icons';
import Link from 'next/link';
import { Media } from 'components/window-width';
import { Fragment } from 'react';
import DarkMode from 'components/lead-dark-mode';

const ArIconConditional = (): JSX.Element => {
	const arIconXs: JSX.Element = (
		<Media at='xs'>
			<Link href='/'>
				<a
					className='container justify-center block w-full min-w-full mx-auto transition-transform transform translate-x-aboutHackingFontAwesomePT py-portfolio'
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
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
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
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolio '
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
					className='container justify-between block w-full min-w-full mx-auto pl-portfolio pt-portfolioRS'
					id='top'
					aria-label='top'
				>
					<WindyCityDevsIcon
						width='10vw'
						height='10vw'
						classNames={[
							` antialised w-svgIcon max-w-svgIcon transform transition-all`
							// '  stroke-current',
							// ` fill-primary`
						]}
					/>
				</a>
			</Link>
		</Media>
	);

	const DarkModeToggler = (): JSX.Element => (
		<div className='col-span-4 text-right transition-all transform md:pt-portfolio md:text-customTitle md:-translate-y-mdmxSocial translate-y-portfolioLSMobile -translate-x-portfolioPadding'>
			<DarkMode />
		</div>
	);

	const ArIconsCoalesced = (): JSX.Element => (
		<Fragment>
			<div className='relative justify-between block w-full min-w-full col-span-2 transition-all lg:w-auto lg:static lg:block lg:justify-start'>
				{arIconXs}
				{arIconSm}
				{arIconMd}
				{arIconDesktop}
			</div>
		</Fragment>
	);
	return (
		<Fragment>
			<div className='container relative grid justify-between w-full min-w-full grid-cols-6 overflow-x-hidden overflow-y-hidden transform select-none -translate-y-portfolio z-1 navbar-expand-lg'>
				<ArIconsCoalesced />
				<DarkModeToggler />
			</div>
		</Fragment>
	);
};

export default ArIconConditional;
