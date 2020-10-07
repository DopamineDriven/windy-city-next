export interface previewPostArgs {
	id: string;
	idType: string;
}

export interface allPostsForHomeAlphabeticalArgs {
	preview: boolean;
	field?: string;
	order?: string;
}

export interface getPostAndMorePostsArgs {
	slug: string | number;
	preview: boolean;
	previewData: any;
}

export interface getAllPostsForCategoryArgs {
	desiredCategory: string;
}

export interface getAllPostsForAboutArgs {
	preview: boolean;
}

// https://wp-graphql.github.io/wp-graphql-api-docs/class-WPGraphQL.Type.PostObject.Connection.PostObjectConnectionResolver.html
