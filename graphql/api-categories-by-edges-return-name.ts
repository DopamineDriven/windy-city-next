import { gql } from '@apollo/client';

const CATEGORIES_BY_EDGES_RETURN_NAME = gql`
	query CategoriesByEdgesReturnName {
		categories {
			edges {
				node {
					name
				}
			}
		}
	}
`;

export default CATEGORIES_BY_EDGES_RETURN_NAME;
