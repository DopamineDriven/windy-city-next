import { gql } from '@apollo/client';

const AUTHOR = gql`
	query Author {
		users {
			edges {
				node {
					avatar {
						url
						size
					}
					firstName
					id
					lastName
					name
					slug
				}
			}
		}
	}
`;

export default AUTHOR;
