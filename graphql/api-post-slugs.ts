import { gql } from '@apollo/client';
import { fetchAPI } from 'lib/api';
import { getAllPostsWithSlug } from 'graphql/__generated__/getAllPostsWithSlug';

// const GET_ALL_POSTS_WITH_SLUG = async () => {
// 	const postSlugs = await fetchAPI(
// 		gql`
// 			query getAllPostsWithSlug {
// 				posts(first: 10000) {
// 					edges {
// 						node {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		`
// 	);
// 	return postSlugs?.posts;
// };

// export default GET_ALL_POSTS_WITH_SLUG;

const POST_SLUGS = gql`
	query getAllPostsWithSlug {
		posts(first: 10000) {
			edges {
				node {
					slug
				}
			}
		}
	}
`;

export default POST_SLUGS;
