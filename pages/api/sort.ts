import { NextApiRequest, NextApiResponse } from 'next';
import { title } from 'process';
// import { getAllPostsForHomeSorted } from '../../lib/api';
import { NowRequest, NowResponse } from '@vercel/node';

enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}

interface Sorting {
	req: NextApiRequest & NowRequest;
	res: NextApiResponse & NowResponse;
	field: string;
	order: string;
	preview: boolean;
	slug: string | number;
}

const { TITLE, MODIFIED, DATE } = Field;
const { ASC, DESC } = Order;

const Sort = async ({ req, res, field, order, preview, slug }: Sorting) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ results: [] }));
};

export default Sort;
