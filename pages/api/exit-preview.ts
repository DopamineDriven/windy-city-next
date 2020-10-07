import { NextApiRequest, NextApiResponse } from 'next';
import { NowRequest, NowResponse } from '@vercel/node';

export default async function exit(
	_req: NowRequest & NextApiRequest,
	res: NowResponse & NextApiResponse
) {
	// Exit the current user from "Preview Mode". This function accepts no args.
	res.clearPreviewData();

	// Redirect the user back to the index page.
	res.writeHead(307, { Location: '/' });
	res.end();
}
