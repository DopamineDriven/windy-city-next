/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesByEdges
// ====================================================

export interface CategoriesByEdges_categories_edges_node {
	__typename: 'Category';
	/**
	 * An alphanumeric identifier for the object unique to its type.
	 */
	slug: string | null;
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * The globally unique ID for the object
	 */
	id: string;
}

export interface CategoriesByEdges_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CategoriesByEdges_categories_edges_node | null;
	/**
	 * A cursor for use in pagination
	 */
	cursor: string | null;
}

export interface CategoriesByEdges_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (CategoriesByEdges_categories_edges | null)[] | null;
}

export interface CategoriesByEdges {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: CategoriesByEdges_categories | null;
}
