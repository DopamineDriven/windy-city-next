import { gql } from '@apollo/client';

const POST_EXCERPTS = gql`
	query PostExcerpts($format: PostObjectFieldFormatEnum!) {
		posts(first: 10000) {
			edges {
				node {
					excerpt(format: $format)
				}
			}
		}
	}
`;

export default POST_EXCERPTS;
