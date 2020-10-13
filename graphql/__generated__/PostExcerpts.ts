/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostObjectFieldFormatEnum } from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: PostExcerpts
// ====================================================

export interface PostExcerpts_posts_edges_node {
	__typename: 'Post';
	/**
	 * The excerpt of the post.
	 */
	excerpt: string | null;
}

export interface PostExcerpts_posts_edges {
	__typename: 'RootQueryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: PostExcerpts_posts_edges_node | null;
}

export interface PostExcerpts_posts {
	__typename: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 */
	edges: (PostExcerpts_posts_edges | null)[] | null;
}

export interface PostExcerpts {
	/**
	 * Connection between the RootQuery type and the post type
	 */
	posts: PostExcerpts_posts | null;
}

export interface PostExcerptsVariables {
	format: PostObjectFieldFormatEnum;
}
