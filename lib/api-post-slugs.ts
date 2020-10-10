import { gql } from '@apollo/client';
import { fetchAPI } from 'lib/api';

export const GET_ALL_POSTS_WITH_SLUG = async (): Promise<void> => {
	const postSlugs = await fetchAPI(
		gql`
			query getAllPostsWithSlug {
				posts(first: 10000) {
					edges {
						node {
							slug
						}
					}
				}
			}
		`
	);
	return postSlugs;
};
