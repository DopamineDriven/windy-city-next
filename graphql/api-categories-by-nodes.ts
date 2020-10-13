import { gql } from '@apollo/client';

const CATEGORIES_BY_NODES = gql`
	query CategoriesByNodes {
		categories {
			nodes {
				name
				count
				slug
				id
			}
		}
	}
`;

export default CATEGORIES_BY_NODES;
