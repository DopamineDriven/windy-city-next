/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostSlugs
// ====================================================

export interface PostSlugs_posts_edges_node {
	__typename: 'Post';
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
}

export interface PostSlugs_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PostSlugs_posts_edges_node | null;
}

export interface PostSlugs_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (PostSlugs_posts_edges | null)[] | null;
}

export interface PostSlugs {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: PostSlugs_posts | null;
}
