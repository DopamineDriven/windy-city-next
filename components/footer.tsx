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
				className='float-right w-auto min-w-full text-center list-none md:w-full md:text-right'
				key={constituent.id}
			>
				<a
					className='block w-auto transition-all delay-300 transform duration-2000 translate-y-portfolioDivider animate-hero hover:text-tertiary md:text-center'
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
		<div className='block w-auto text-center align-top transition-all duration-1000 font-somaRoman text-primary hover:text-tertiary '>
			<Link href='/#top' passHref as='/top'>
				<a
					className='justify-start block whitespace-no-wrap transition-all duration-1000 ease-in-out pl-portfolioDivider hover:text-tertiary items-left'
					aria-label='back to top'
				>
					Back to Top
				</a>
			</Link>
		</div>
	);
	const copyRight = (
		<div className='flex flex-row w-full mx-auto tracking-wide text-center'>
			<div className='block w-auto mx-auto text-center align-top font-somaRoman'>
				<a
					className='justify-center block transition-all delay-300 transform duration-3000 -translate-y-portfolioDivider animate-hero hover:text-tertiary'
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
			<footer className='w-full max-w-full select-none font-somaRoman px-portfolioFooter text-customFooterMobile md:text-customTitle pt-portfolioH2F pb-mobileGapY'>
				<div className='w-full min-w-full'>
					<div className='block w-full min-w-full overflow-hidden'>
						<div className='grid content-end justify-end w-full grid-cols-8 align-bottom first:col-span-3'>
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
	<div className='grid w-full grid-cols-3 tracking-wide'>
		<div className='block text-center align-top font-somaRoman text-primary hover:text-fiveOBlack'>
			<a
				className='flex flex-row-reverse justify-center w-full text-center uppercase'
				target='__blank'
				href='https://github.com/DopamineDriven/asross-portfolio'
				aria-label='all rights reserved, 2020'
			>
				UI, Duncan Ross
			</a>
		</div>
		<div className='block text-right align-top transition-colors duration-300 cursor-pointer font-somaRoman text-primary hover:text-everythingIsBlue'>
			<a
				className='items-end justify-end block float-right w-full text-right uppercase'
				aria-label='everything is blue'
			>
				Everything is blue
			</a>
		</div>
	</div> 
*/
