import { gql } from '@apollo/client';

const POST_SLUGS = gql`
	query PostSlugs {
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
