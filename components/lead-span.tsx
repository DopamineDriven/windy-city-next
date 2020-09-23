interface LeadSpanInterface {
	id: number;
	span: string;
}

const spanSnippets: LeadSpanInterface[] = [
	{
		id: 0,
		span: 'Andrew Ross is a Chicago Based Full-Stack Engineer proficient '
	},
	{
		id: 1,
		span: 'in JAMstack, React, TypeScript, Next.js, Headless WordPress, '
	},
	{
		id: 2,
		span: 'Node, GraphQL, Apollo, Tailwind CSS, MongoDB, PostgreSQL, '
	},
	{
		id: 3,
		span: 'MySQL, Authentication/Authorization, JWTs, Google Analytics, '
	},
	{
		id: 4,
		span: 'Static Site Generation, Server Side Rendering, Incremental Static '
	},
	{
		id: 5,
		span: 'Regeneration, DB Migration, UX, and Vercel. Cofounder of Windy '
	},
	{
		id: 6,
		span: 'City Devs LLC. Full-Stack development TA at Vanderbilt University. '
	},
	{
		id: 7,
		span: 'Project lead uniting local Chicago Media companies. Collaborates '
	},
	{
		id: 8,
		span: 'with techies from around the globe. What drives this? A desire to '
	},
	{
		id: 9,
		span: 'build. Available for freelance, contract, and full-time roles. '
	}
];

const LeadSpan = (): JSX.Element => {
	const spanMap: JSX.Element[] = spanSnippets.map(constituent => {
		return (
			<span
				className='font-thin font-somaRoman tracking-tighter cursor-default md:text-justify'
				key={constituent.id}
			>
				{constituent.span}
				<br />
			</span>
		);
	});
	return (
		<p className='transform -translate-y-landingOverviewTranslation transition-all text-customExcerptMobile md:text-customP pr-portfolioRS md:pl-portfolioLS pl-portfolioLSMobile leading-headerP block font-somaRoman tracking-tighter font-thin ease-in-out'>
			Hallo this is Windy City Devs. Want us dark n naughty? We got you covered.
			Want us angelic & wHolesome? Joe's body is ready. 👼 
		</p>
	);
};

export default LeadSpan;
