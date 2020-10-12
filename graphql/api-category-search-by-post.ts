import { gql } from '@apollo/client';

const SEARCH_CATEGORIES_RETURN_POSTS = gql`
	query SearchCategoriesReturnPosts(
		$name: [String!]
		$search: String
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		categories(where: { name: $name, search: $search }) {
			edges {
				node {
					name
					posts(where: { orderby: { field: $field, order: $order } }) {
						edges {
							node {
								title
								uri
								social {
									facebook
									github
									instagram
									linkedin
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
								count
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
