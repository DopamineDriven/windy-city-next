/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: SearchCategoriesReturnPosts
// ====================================================

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_social {
	__typename: 'Post_Social';
	/**
	 * Facebook Url (optional)
	 */
	facebook: string | null;
	/**
	 * GitHub Url (mandatory)
	 */
	github: string | null;
	/**
	 * Instagram Url (optional)
	 */
	instagram: string | null;
	/**
	 * LinkedIn Url (mandatory)
	 */
	linkedin: string | null;
	/**
	 * Twitter Url (optional)
	 */
	twitter: string | null;
	/**
	 * Portfolio Url (mandatory)
	 */
	website: string | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_featuredImage_node {
	__typename: 'MediaItem';
	/**
	 * Url of the mediaItem
	 */
	sourceUrl: string | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_featuredImage {
	__typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_featuredImage_node | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
	/**
	 * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
	 */
	size: number | null;
	/**
	 * Height of the avatar image.
	 */
	height: number | null;
	/**
	 * Width of the avatar image.
	 */
	width: number | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author_node {
	__typename: 'User';
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author_node_avatar | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author {
	__typename: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 */
	node: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author_node | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node {
	__typename: 'Post';
	/**
	 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
	 */
	title: string | null;
	/**
	 * URI path for the resource
	 */
	uri: string;
	social: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_social | null;
	/**
	 * The excerpt of the post.
	 */
	excerpt: string | null;
	/**
	 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
	 */
	slug: string | null;
	/**
	 * Connection between the NodeWithFeaturedImage type and the MediaItem type
	 */
	featuredImage: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_featuredImage | null;
	/**
	 * Connection between the NodeWithAuthor type and the User type
	 */
	author: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node_author | null;
	/**
	 * The content of the post.
	 */
	content: string | null;
	/**
	 * Post publishing date.
	 */
	date: string | null;
	/**
	 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
	 */
	modified: string | null;
	/**
	 * The globally unique identifier of the post object.
	 */
	id: string;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts_edges {
	__typename: 'CategoryToPostConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: SearchCategoriesReturnPosts_categories_edges_node_posts_edges_node | null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node_posts {
	__typename: 'CategoryToPostConnection';
	/**
	 * Edges for the CategoryToPostConnection connection
	 */
	edges:
		| (SearchCategoriesReturnPosts_categories_edges_node_posts_edges | null)[]
		| null;
}

export interface SearchCategoriesReturnPosts_categories_edges_node {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * The number of objects connected to the object
	 */
	count: number | null;
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * Connection between the category type and the post type
	 */
	posts: SearchCategoriesReturnPosts_categories_edges_node_posts | null;
}

export interface SearchCategoriesReturnPosts_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: SearchCategoriesReturnPosts_categories_edges_node | null;
}

export interface SearchCategoriesReturnPosts_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (SearchCategoriesReturnPosts_categories_edges | null)[] | null;
}

export interface SearchCategoriesReturnPosts {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: SearchCategoriesReturnPosts_categories | null;
}

export interface SearchCategoriesReturnPostsVariables {
	name?: string[] | null;
	search?: string | null;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}
