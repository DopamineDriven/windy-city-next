import cn from 'classnames';
import Link from 'next/link';

export interface CoverImageProps {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug: string | number;
}

const CoverImageCard = ({
	title,
	coverImage,
	slug
}: CoverImageProps): JSX.Element => {
	const Image = (): JSX.Element => (
		<img
			src={coverImage ? coverImage.sourceUrl : coverImage}
			alt={title}
			className={cn(
				'w-xsCardGridCima max-w-xsCardGridCima sm:w-aboutImage600 sm:max-w-aboutImage600 h-aboutOffsetPRMobile sm:h-portfolioS sm:max-h-full lg:h-imagePortfolio rounded-t-custom overflow-x-hidden lg:w-aboutImage400 lg:max-w-aboutImage400',
				{
					'transition-shadow duration-400': slug
				}
			)}
		/>
	);
	return (
		<div className=''>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>
						<Image />
					</a>
				</Link>
			) : (
				<Image />
			)}
		</div>
	);
};

export default CoverImageCard;
