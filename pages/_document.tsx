import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from 'next/document';
import { mediaStyles } from 'lib/window-width';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps: DocumentInitialProps = await Document.getInitialProps(
			ctx
		);
		return { ...initialProps };
	}

	render(): JSX.Element {
		const debugScreensDev =
			process.env.NODE_ENV === 'development' ? ' debug-screens' : '';
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					<link rel='stylesheet' href='/fonts/style.css' />
					<style type='text/css' dangerouslySetInnerHTML={{ __html: mediaStyles }} />
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=UA-${process.env.GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
						}}
					/>
				</Head>
				<body
					className={`transition-colors duration-1000 ease-in-out motion-safe:animate-hero transform root ${debugScreensDev}`}
				>
					<script src='/noflash.js' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// https://github.com/vercel/next.js/issues/9160
// https://gitlab.com/kachkaev/website-frontend/blob/ec20c3bfec24cde40d80194bcad5ba69b308a5ef/src/pages/_document.tsx#L31
// <link rel='stylesheet' href='https://use.typekit.net/sbg1kws.css' />
// <link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
// <link rel='stylesheet' href='https://use.typekit.net/lxd3fak.css' />
// https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools
//preconnect, preload, dns-prefetch --> rel="x"
