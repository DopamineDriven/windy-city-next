/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoriesByEdgesReturnName
// ====================================================

export interface CategoriesByEdgesReturnName_categories_edges_node {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
}

export interface CategoriesByEdgesReturnName_categories_edges {
	__typename: 'RootQueryToCategoryConnectionEdge';
	/**
	 * The item at the end of the edge
	 */
	node: CategoriesByEdgesReturnName_categories_edges_node | null;
}

export interface CategoriesByEdgesReturnName_categories {
	__typename: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 */
	edges: (CategoriesByEdgesReturnName_categories_edges | null)[] | null;
}

export interface CategoriesByEdgesReturnName {
	/**
	 * Connection between the RootQuery type and the category type
	 */
	categories: CategoriesByEdgesReturnName_categories | null;
}
