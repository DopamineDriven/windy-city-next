import { gql } from '@apollo/client';

const ALL_POSTS = gql`
	query AllPosts($field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
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
					title
					content
					date
					excerpt
					featuredImage {
						node {
							sourceUrl
						}
					}
					id
					modified
					slug
					social {
						facebook
						github
						instagram
						linkedin
						twitter
						website
					}
				}
			}
		}
	}
`;

export default ALL_POSTS;
