import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { PostSlugs_posts_edges_node } from '../graphql/__generated__/PostSlugs';

interface CardTitleProps {
	title: string;
	slug?: PostSlugs_posts_edges_node;
	// postTitle: string;
}

const CardTitle = ({ title, slug }: CardTitleProps): JSX.Element => {
	return (
		<div className='block w-auto font-bold leading-tight text-customCardTitle pl-portfolioDivider h-paddingPostTitleTop sm:h-paddingPostTitleBottom'>
			<Link as={`/posts/${slug}`} href='/posts/[slug]' passHref scroll={true}>
				<a
					className='block font-semibold text-left transition-all duration-1000 transform animate-hero font-head hover:text-tertiary translate-y-portfolioDivider'
					aria-label={`portfolio item title - ${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={title}
						className='text-center transition-all transform sm:text-left hover:text-tertiary text-customTitleMobile sm:text-customTitle lg:text-customExcerptMobile animate-hero '
					/>
				</a>
			</Link>
		</div>
	);
};

export default CardTitle;
