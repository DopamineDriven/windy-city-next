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

const LeadSocial = (): JSX.Element => {
	const socialMap: JSX.Element[] = socialSnippets.map(constituent => {
		return (
			<div className='mt-socialMargin block' key={constituent.id}>
				<a
					className='block z-50 hover:text-tertiary py-portfolioDivider md:py-0 transition-all translate-y-mdmxSocial tracking-wide transform ease-in-out animate-hero'
					target={constituent.target}
					aria-label={constituent.label}
					href={constituent.href}
				>
					{constituent.label}
				</a>
			</div>
		);
	});
	return (
		<Fragment>
			<div
				className='md:text-customExcerptMobile md:leading-portfolio md:visible invisible md:transition-all md:-translate-y-portfolioDivider md:transform md:animate-hero md:ease-in-out'
				style={{
					position: 'absolute',
					top: '90.78333vw',
					left: '3.33333vw'
				}}
			>
				{socialMap}
			</div>
			<div
				className='text-customTitle font-somaRoman leading-customSLM tracking-wide block uppercase md:hidden transition-all translate-y-portfolioLS transform animate-hero ease-in-out'
				style={{ position: 'absolute', top: '94.78333vw', left: '3.33333vw' }}
			>
				{socialMap}
			</div>
		</Fragment>
	);
};

export default LeadSocial;
