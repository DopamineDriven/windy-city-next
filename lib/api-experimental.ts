// import { fallbackHttpConfig } from '@apollo/client';
// import WPGraphQL, {PostTypeList } from 'wp-graphql';
// import { postTypeList } from 'wp-graphql/lib/models/post-types/types/postTypeType';
// const defined = process.env.WORDPRESS_API_URL;

// let fallbackC
// const gql: WPGraphQL = new WPGraphQL(`${process.env.WORDPRESS_API_URL}`, { });
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { DocumentNode } from 'graphql';
import { fetchAPI } from 'lib/api';

export const INTROSPECTION_QUERY = async (): Promise<void> => {
	const data = await fetchAPI(
		gql`
			query IntrospectionQuery {
				__schema {
					queryType {
						name
					}
					mutationType {
						name
					}
					subscriptionType {
						name
					}
					types {
						...FullType
					}
					directives {
						name
						description
						locations
						args {
							...InputValue
						}
					}
				}
			}
			fragment FullType on __Type {
				kind
				name
				description
				fields(includeDeprecated: true) {
					name
					description
					args {
						...InputValue
					}
					type {
						...TypeRef
					}
					isDeprecated
					deprecationReason
				}
				inputFields {
					...InputValue
				}
				interfaces {
					...TypeRef
				}
				enumValues(includeDeprecated: true) {
					name
					description
					isDeprecated
					deprecationReason
				}
				possibleTypes {
					...TypeRef
				}
			}
			fragment InputValue on __InputValue {
				name
				description
				type {
					...TypeRef
				}
				defaultValue
			}
			fragment TypeRef on __Type {
				kind
				name
				ofType {
					kind
					name
					ofType {
						kind
						name
						ofType {
							kind
							name
							ofType {
								kind
								name
								ofType {
									kind
									name
									ofType {
										kind
										name
										ofType {
											kind
											name
										}
									}
								}
							}
						}
					}
				}
			}
		`
	);
	return data;
};

// export const allPostsQueryVars = {
// 	field: 'MODIFIED',
// 	order: 'ASC'
// };
