import { fetchAPI } from 'lib/api';
import gql from 'graphql-tag';
import { NowResponse, NowRequest } from '@vercel/node';
import { NextApiResponse } from 'next';

const getAllPostsWithSlug = async () => {
	const data: any = await fetchAPI(gql`
		{
			posts(first: 10000) {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);
	console.log(typeof data, data);
	return data?.posts;
};

export default getAllPostsWithSlug;
