import Card from './card';
import { PostsProps } from '../types/posts';

type NodeProps = {
	node: any;
};

type CardsProps = {
	posts: PostsProps[];
};

export default function CardsCoalesced({ posts }: CardsProps) {
	return (
		<section className='content-center justify-center block mx-auto '>
			<div className='grid content-center justify-center grid-cols-1 mx-auto text-center align-middle sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-portfolio gap-y-portfolioPadding sm:max-w-cardGridMobile max-w-cardGrid'>
				{posts.map((company: PostsProps) => {
					const node: any = company.node;
					return (
						<Card
							key={node.slug}
							title={node.title}
							coverImage={node.featuredImage.node}
							modified={node.modified}
							social={node.social}
							author={node.author}
							slug={node.slug}
							excerpt={node.excerpt}
						/>
					);
				})}
			</div>
		</section>
	);
}
