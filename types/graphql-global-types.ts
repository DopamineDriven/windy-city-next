/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * The Type of Identifier used to fetch a single resource. Default is ID.
 */
export enum CategoryIdType {
	DATABASE_ID = 'DATABASE_ID',
	ID = 'ID',
	NAME = 'NAME',
	SLUG = 'SLUG',
	URI = 'URI'
}

/**
 * The cardinality of the connection order
 */
export enum OrderEnum {
	ASC = 'ASC',
	DESC = 'DESC'
}

/**
 * The format of post field data.
 */
export enum PostObjectFieldFormatEnum {
	RAW = 'RAW',
	RENDERED = 'RENDERED'
}

/**
 * Field to order the connection by
 */
export enum PostObjectsConnectionOrderbyEnum {
	AUTHOR = 'AUTHOR',
	COMMENT_COUNT = 'COMMENT_COUNT',
	DATE = 'DATE',
	IN = 'IN',
	MENU_ORDER = 'MENU_ORDER',
	MODIFIED = 'MODIFIED',
	NAME_IN = 'NAME_IN',
	PARENT = 'PARENT',
	SLUG = 'SLUG',
	TITLE = 'TITLE'
}

/**
 * A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.
 */
export enum __DirectiveLocation {
	ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',
	ENUM = 'ENUM',
	ENUM_VALUE = 'ENUM_VALUE',
	FIELD = 'FIELD',
	FIELD_DEFINITION = 'FIELD_DEFINITION',
	FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',
	FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',
	INLINE_FRAGMENT = 'INLINE_FRAGMENT',
	INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION',
	INPUT_OBJECT = 'INPUT_OBJECT',
	INTERFACE = 'INTERFACE',
	MUTATION = 'MUTATION',
	OBJECT = 'OBJECT',
	QUERY = 'QUERY',
	SCALAR = 'SCALAR',
	SCHEMA = 'SCHEMA',
	SUBSCRIPTION = 'SUBSCRIPTION',
	UNION = 'UNION',
	VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'
}

/**
 * An enum describing what kind of type a given `__Type` is.
 */
export enum __TypeKind {
	ENUM = 'ENUM',
	INPUT_OBJECT = 'INPUT_OBJECT',
	INTERFACE = 'INTERFACE',
	LIST = 'LIST',
	NON_NULL = 'NON_NULL',
	OBJECT = 'OBJECT',
	SCALAR = 'SCALAR',
	UNION = 'UNION'
}

//==============================================================
// END Enums and Input Objects
//==============================================================
