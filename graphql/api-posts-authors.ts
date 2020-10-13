import { gql } from '@apollo/client';

const POSTS_AUTHORS = gql`
	query PostsAuthors {
		posts {
			edges {
				node {
					author {
						node {
							avatar {
								url
							}
							firstName
							lastName
							name
							nickname
							id
							slug
						}
					}
				}
			}
		}
	}
`;

export default POSTS_AUTHORS;
