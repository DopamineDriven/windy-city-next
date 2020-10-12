import { gql } from '@apollo/client';

const CATEGORIES_BY_EDGES = gql`
	query CategoriesByEdges {
		categories {
			edges {
				node {
					slug
					name
					id
				}
				cursor
			}
		}
	}
`;

export default CATEGORIES_BY_EDGES;
