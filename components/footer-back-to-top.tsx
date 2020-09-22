import Link from 'next/link';

const FooterBackToTop = (): JSX.Element => {
	return (
		<div className='col-span-4 text-left float-left block'>
			<a className='float-left block transition-all duration-3000 delay-300 translate-y-portfolioDivider transform animate-hero'>
				<div className='block w-auto align-top font-somaRoman hover:text-tertiary text-center transition-all duration-3000 '>
					<Link href='/#top' passHref as='/top'>
						<a
							className='block pl-portfolioDivider whitespace-no-wrap duration-1000 transition-all ease-in-out hover:text-tertiary items-left justify-start'
							aria-label='back to top'
						>
							Back to Top
						</a>
					</Link>
				</div>
			</a>
		</div>
	);
};

export default FooterBackToTop;
