/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsAuthors
// ====================================================

export interface PostsAuthors_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
}

export interface PostsAuthors_posts_edges_node_author_node {
	__typename: 'User';
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: PostsAuthors_posts_edges_node_author_node_avatar | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
	/**
	 * Nickname of the user.
	 */
	nickname: string | null;
	/**
	 * The globally unique identifier for the user object.
	 */
	id: string;
	/**
	 * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
	 */
	slug: string | null;
}

export interface PostsAuthors_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: PostsAuthors_posts_edges_node_author_node | null;
}

export interface PostsAuthors_posts_edges_node {
	__typename: 'Post';
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: PostsAuthors_posts_edges_node_author | null;
}

export interface PostsAuthors_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PostsAuthors_posts_edges_node | null;
}

export interface PostsAuthors_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (PostsAuthors_posts_edges | null)[] | null;
}

export interface PostsAuthors {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: PostsAuthors_posts | null;
}
