/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesByNodes
// ====================================================

export interface CategoriesByNodes_categories_nodes {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * An alphanumeric identifier for the object unique to its type.
	 */
	slug: string | null;
	/**
	 * The globally unique ID for the object
	 */
	id: string;
}

export interface CategoriesByNodes_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * The nodes of the connection, without the edges
	 */
	nodes: (CategoriesByNodes_categories_nodes | null)[] | null;
}

export interface CategoriesByNodes {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: CategoriesByNodes_categories | null;
}
