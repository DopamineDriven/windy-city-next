import Link from 'next/link';

interface SubLeadInterface {
	title: String;
}

const LeadSubReturnHome = ({ title }: SubLeadInterface): JSX.Element => {
	return (
		<div className='block justify-between lg:justify-start w-full min-w-full z-2 md:text-customExcerpt text-customExcerptMobile tracking-tighter pt-portfolioDivider translate-y-portfolioLS transform'>
			<Link href={`/#home-${title}`} passHref>
				<a
					className='block align-middle justify-between mx-auto text-center mt-portfolio font-somaRoman hover:text-tertiary transition-all transform ease-in-out'
					aria-label='return home'
				>
					Return Home
				</a>
			</Link>
		</div>
	);
};

export default LeadSubReturnHome;
