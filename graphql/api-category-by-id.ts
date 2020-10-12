import { gql } from '@apollo/client';

const CATEGORY_BY_ID = gql`
	query CategoryById($id: ID!, $idType: CategoryIdType!) {
		category(id: $id, idType: $idType) {
			name
			id
			slug
			count
		}
	}
`;

export default CATEGORY_BY_ID;
