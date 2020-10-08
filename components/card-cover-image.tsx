import cn from 'classnames';
import Link from 'next/link';

export type CoverImageProps = {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug: string | number;
};
const CoverImageCard = ({ title, coverImage, slug }: CoverImageProps) => {
	const image = (
		<img
			src={coverImage}
			alt={title}
			className={cn(
				'w-imagePortfolioMobile max-w-imagePortfolioMobile md:w-imagePortfolio md:max-w-imagePortfolio h-auto max-h-full md:h-auto md:max-h-full',
				{
					'hover:shadow-lg transition-shadow duration-400': slug
				}
			)}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref scroll={true}>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default CoverImageCard;
