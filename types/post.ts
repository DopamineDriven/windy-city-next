import Author from './author';
import Tag from './tag';
import Category from './category';

interface PostType {
	slug: string | number;
	title: string;
	date: string;
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	author: Author;
	excerpt: string;
	ogImage?: {
		url: string;
	};
	content: string;
	categories?: Category[];
	tags: { edges: any[] };
}

export default PostType;
