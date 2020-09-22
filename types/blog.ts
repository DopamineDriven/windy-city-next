import BlogSocial from 'types/social/blog-social';

export default interface Blog extends BlogSocial {
	slug: string;
	title: string;
	postTitle: string;
	date: string;
	coverImage: string;
	articleImage: string;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}
