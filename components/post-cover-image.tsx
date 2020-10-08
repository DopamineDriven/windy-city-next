import cn from 'classnames';
import Link from 'next/link';

export type CoverImageProps = {
	title: string;
	coverImage: { sourceUrl: string } | any;
	slug?: string | number;
};

export default function CoverImage({
	title,
	coverImage,
	slug
}: CoverImageProps) {
	const image = (
		<img
			src={coverImage ? coverImage.sourceUrl : coverImage}
			alt={title}
			className={cn(
				'shadow-small justify-center align-middle content-center text-center items-center',
				{
					'hover:shadow-lg transition-shadow duration-400 justify-center align-middle items-center content-center': slug
				}
			)}
		/>
	);
	return (
		<div className='sm:mx-0 flex align-middle content-center justify-center text-center'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
}
