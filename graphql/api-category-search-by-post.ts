import { gql } from '@apollo/client';

const SEARCH_CATEGORIES_RETURN_POSTS = gql`
	query SearchCategoriesReturnPosts(
		$name: [String!]
		$search: String
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
		$hideEmpty: Boolean!
	) {
		categories(where: { name: $name, search: $search, hideEmpty: $hideEmpty }) {
			edges {
				node {
					name
					count
					id
					slug
					posts(where: { orderby: { field: $field, order: $order } }) {
						edges {
							node {
								title
								uri
								social {
									facebook
									instagram
									twitter
									website
								}
								excerpt
								slug
								featuredImage {
									node {
										sourceUrl
									}
								}
								author {
									node {
										name
										firstName
										lastName
										avatar {
											url
											size
											height
											width
										}
									}
								}
								content
								date
								modified
								id
							}
						}
					}
				}
			}
		}
	}
`;

export default SEARCH_CATEGORIES_RETURN_POSTS;
