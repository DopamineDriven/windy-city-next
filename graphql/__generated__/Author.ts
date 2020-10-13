/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Author
// ====================================================

export interface Author_users_edges_node_avatar {
	__typename: 'Avatar';
	/**
	 * URL for the gravatar image source.
	 */
	url: string | null;
	/**
	 * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
	 */
	size: number | null;
}

export interface Author_users_edges_node {
	__typename: 'User';
	/**
	 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
	 */
	avatar: Author_users_edges_node_avatar | null;
	/**
	 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
	 */
	firstName: string | null;
	/**
	 * The globally unique identifier for the user object.
	 */
	id: string;
	/**
	 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
	 */
	lastName: string | null;
	/**
	 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
	 */
	name: string | null;
	/**
	 * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
	 */
	slug: string | null;
}

export interface Author_users_edges {
	__typename: 'RootQueryToUserConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: Author_users_edges_node | null;
}

export interface Author_users {
	__typename: 'RootQueryToUserConnection';
	/**
	 * Edges for the RootQueryToUserConnection connection
	 */
	edges: (Author_users_edges | null)[] | null;
}

export interface Author {
	/**
	 * Connection between the RootQuery type and the User type
	 */
	users: Author_users | null;
}
