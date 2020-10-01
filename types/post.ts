import Author from 'types/author';
import Social from 'types/social/posts-social';

interface PostType extends Social {
	slug: string;
	title: string;
	postTitle: string;
	date: string;
	coverImage: string;
	articleImage: string;
	author: Author;
	excerpt: string;
	articleExcerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export default PostType;

export enum StaticPropsPosts {
	title = 'title',
	date = 'date',
	slug = 'slug',
	coverImage = 'coverImage',
	excerpt = 'excerpt',
	postTitle = 'postTitle',
	articleImage = 'articleImage'
}
