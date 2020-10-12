import { gql } from '@apollo/client';

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
