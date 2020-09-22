import Link from 'next/link';
import PortfolioDivider from 'components/portfolio-divider';
import BackToTop from 'components/footer-back-to-top';
import { Fragment } from 'react';

interface SocialContact {
	id: number;
	label: string;
	target: string;
	href: string;
}

const socialSnippets: SocialContact[] = [
	{
		id: 0,
		label: 'Email',
		target: '__blank',
		href: 'mailto:andrew.simpson.ross@gmail.com'
	},
	{
		id: 1,
		label: 'LinkedIn',
		target: '__blank',
		href: 'https://www.linkedin.com/in/asross/'
	},
	{
		id: 2,
		label: 'Twitter',
		target: '__blank',
		href: 'https://twitter.com/Dopamine_Driven'
	},
	{
		id: 3,
		label: 'GitHub',
		target: '__blank',
		href: 'https://github.com/DopamineDriven'
	}
];

const Footer = (): JSX.Element => {
	const socialMap = socialSnippets.map(constituent => {
		return (
			<div
				className='list-none w-auto min-w-full md:w-full text-center md:text-right float-right'
				key={constituent.id}
			>
				<a
					className='block transition-all duration-2000 delay-300 translate-y-portfolioDivider transform animate-hero w-auto hover:text-tertiary md:text-center'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					<p className='w-auto'>{constituent.label}</p>
				</a>
			</div>
		);
	});
	const backToTop = (
		<div className='block w-auto align-top font-somaRoman text-primary hover:text-tertiary text-center transition-all duration-1000 '>
			<Link href='/#top' passHref as='/top'>
				<a
					className='block pl-portfolioDivider whitespace-no-wrap duration-1000 transition-all ease-in-out hover:text-tertiary items-left justify-start'
					aria-label='back to top'
				>
					Back to Top
				</a>
			</Link>
		</div>
	);
	const copyRight = (
		<div className='flex flex-row mx-auto w-full tracking-wide text-center'>
			<div className='block align-top mx-auto font-somaRoman  text-center w-auto'>
				<a
					className='block transition-all duration-3000 delay-300 -translate-y-portfolioDivider transform animate-hero justify-center hover:text-tertiary'
					href='https://github.com/DopamineDriven/asross-portfolio'
					target='__blank'
					aria-label='repo'
				>
					©2020 All Rights Reserved
				</a>
			</div>
		</div>
	);
	return (
		<Fragment>
			<footer className='select-none font-somaRoman w-full max-w-full px-portfolioFooter text-customFooterMobile md:text-customTitle pt-portfolioH2F pb-mobileGapY'>
				<div className='w-full min-w-full'>
					<div className='block min-w-full w-full overflow-hidden'>
						<div className='grid grid-cols-8 w-full content-end justify-end align-bottom first:col-span-3'>
							<BackToTop />
							{socialMap}
						</div>
						<PortfolioDivider />
						{copyRight}
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;

/*
	<div className='grid grid-cols-3 w-full tracking-wide'>
		<div className='block align-top font-somaRoman text-primary text-center hover:text-fiveOBlack'>
			<a
				className='flex flex-row-reverse w-full uppercase text-center justify-center'
				target='__blank'
				href='https://github.com/DopamineDriven/asross-portfolio'
				aria-label='all rights reserved, 2020'
			>
				UI, Duncan Ross
			</a>
		</div>
		<div className='block align-top font-somaRoman text-primary text-right hover:text-everythingIsBlue transition-colors duration-300 cursor-pointer'>
			<a
				className='block w-full uppercase text-right justify-end items-end float-right'
				aria-label='everything is blue'
			>
				Everything is blue
			</a>
		</div>
	</div> 
*/
