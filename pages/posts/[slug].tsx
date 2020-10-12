import { NextRouter, useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';
import PostBody from 'components/post-body';
import Header from 'components/lead-sub';
import PostHeader from 'components/post-header';
import Layout from 'components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import PostTitle from 'components/post-title';
import Head from 'next/head';
import { CMS_NAME } from 'lib/constants';
import MoreCards from 'components/cards-coalesced';
import { Fragment } from 'react';
import { MediaContextProvider } from 'lib/window-width';
import GET_ALL_POSTS_WITH_SLUG from 'graphql/api-post-slugs';

interface SlugProps {
	post: any;
	posts: any;
	preview: boolean;
}

export default function Post({ post, posts, preview }: SlugProps): JSX.Element {
	const router: NextRouter = useRouter();
	const morePosts = posts?.edges;

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const HeaderType = (post: any): JSX.Element => {
		return <Header title={post.title} />;
	};

	return (
		<Fragment>
			<MediaContextProvider>
				<HeaderType />
				<Layout preview={preview}>
					{router.isFallback ? (
						<PostTitle>Loading…</PostTitle>
					) : (
						<>
							<article>
								<Head>
									<title>
										{post.title} | Next.js Blog Example with {CMS_NAME}
									</title>
									<meta
										property='og:image'
										content={post.featuredImage?.node?.sourceUrl}
									/>
								</Head>
								<PostHeader
									title={post.title}
									coverImage={post.featuredImage.node}
									date={post.date}
									modified={post.modified}
									author={post.author.node}
									categories={post.categories}
									slug={post.slug}
									social={post.social}
								/>
								<PostBody content={post.content} />
								{/* <footer>
									{post.tags.edges.length > 0 && <Tags tags={post.tags} />}
								</footer> */}
							</article>
							<div className='items-center content-center justify-center block max-w-full mx-auto my-portfolioH2F'>
								{morePosts.length > 0 && <MoreCards posts={morePosts} />}
							</div>
						</>
					)}
				</Layout>
			</MediaContextProvider>
		</Fragment>
	);
}

interface Params {
	params: {
		slug: string | number;
	};
	preview: boolean;
	previewData: any;
}

export const getStaticProps = async ({
	params,
	preview = false,
	previewData
}: Params & GetStaticProps) => {
	const data = await getPostAndMorePosts(params.slug, preview, previewData);
	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts
		},
		revalidate: 10
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allPosts = await getAllPostsWithSlug();

	return {
		paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
		fallback: true
	};
};
