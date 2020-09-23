import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';
import { Fragment } from 'react';

const MetaData = (): JSX.Element => {
	const relCanonical = [`https://windycitydevs.io`, 'https://windycitydevs.com', 'https://windy-city-next.vercel.app']
	console.log(relCanonical)
	return (
		<Fragment>
			<Head>
				<link
					rel='apple-touch-icon'
					type='img/png'
					sizes='180x180'
					href='/meta/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/meta/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/meta/favicon-16x16.png'
				/>
				<link rel='manifest' href='/meta/manifest.json' />
				<link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#000000' />
				<link rel='shortcut icon' href='/meta/favicon.ico' />
				<link rel='canonical' href={`${relCanonical}`} />
				<meta name='robots' content='all' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
				/>
				<meta name='format-detection' content='telephone=no' />
				<title>Windy City Devs - Modernizing Your Web Presence</title>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-config' content='/meta/browserconfig.xml' />
				<meta name='theme-color' content='#000000' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
				<meta
					name='description'
					content={`${CMS_NAME} via Nextjs; the React framework for production. Andrew Ross is a Chicago based full stack engineer who specializes in Next.js, TypeScript, React, Apollo, GraphQL, MongoDB, PostgreSQL Headless CMSs, JAMstack, MERN, Tailwind CSS, Static Site Generation, SEO, and Server Side Rendering`}
				/>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='keywords'
					content='nextjs, typescript, react, react-markdown, static site generation, tailwindcss, vercel, figma'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@Dopamine_Driven' />
				<meta name='twitter:title' content='Andrew Ross — Full-Stack Engineer' />
				<meta
					name='twitter:description'
					content={`${CMS_NAME} via Nextjs; the React framework for production. Andrew Ross is a Chicago based full stack engineer who specializes in Next.js, TypeScript, React, Apollo, GraphQL, MongoDB, PostgreSQL Headless CMSs, JAMstack, MERN, Tailwind CSS, Static Site Generation, SEO, and Server Side Rendering`}
				/>
				<meta name='twitter:image' content={HOME_OG_IMAGE_URL} />
				<meta name='twitter:creator' content='@Dopamine_Driven' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://asross-portfolio.vercel.app/' />
				<meta property='og:title' content='Andrew Ross — Full-Stack Engineer' />
				<meta
					property='og:description'
					content={`${CMS_NAME} via Nextjs; the React framework for production. Andrew Ross is a Chicago based full stack engineer who specializes in Next.js, TypeScript, React, Apollo, GraphQL, MongoDB, PostgreSQL Headless CMSs, JAMstack, MERN, Tailwind CSS, Static Site Generation, SEO, and Server Side Rendering`}
				/>
				<meta property='og:image' content={HOME_OG_IMAGE_URL} />
				<meta property='og:image:width' content='2048' />
				<meta property='og:image:height' content='1170' />
			</Head>
		</Fragment>
	);
};

export default MetaData;

// content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=no'
