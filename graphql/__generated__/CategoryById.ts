/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryIdType } from './../../types/graphql-global-types';

// ====================================================
// GraphQL query operation: CategoryById
// ====================================================

export interface CategoryById_category {
	__typename: 'Category';
	/**
	 * The human friendly name of the object.
	 */
	name: string | null;
	/**
	 * The globally unique ID for the object
	 */
	id: string;
	/**
	 * An alphanumeric identifier for the object unique to its type.
	 */
	slug: string | null;
	/**
	 * The number of objects connected to the object
	 */
	count: number | null;
}

export interface CategoryById {
	/**
	 * A 0bject
	 */
	category: CategoryById_category | null;
}

export interface CategoryByIdVariables {
	id: string;
	idType: CategoryIdType;
}
