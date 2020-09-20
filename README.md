# windy-city-next

```scss
/*
https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth#:~:text=WebKit%20implements%20a%20similar%20property,%2Dwebkit%2Dfont%2Dsmoothing%20.&text=antialiased%20%2D%20Smooth%20the%20font%20on,backgrounds%20makes%20it%20look%20lighter.
*/

.light-mode {
	/* --color-bg-primary: #ebe8e0;
	--color-text-primary: #000000;
	--color-text-secondary: #151515; */
	@apply bg-portfolio text-black border-black; 
}

.dark-mode {
	/* --color-bg-primary: #14171f;
	--color-text-primary: #ffffff;
	--color-text-secondary: #eaeaea; */
	@apply bg-black text-white;
}

:root {
	@apply .light-mode;
}

html {
	-webkit-text-size-adjust: none;
	-webkit-font-smoothing: subpixel-antialiased;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: auto;
	-webkit-tap-highlight-color: transparent;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
	text-shadow: none;
}

/* ::-moz-selection {
        text-shadow: none;
        background: #333;
        color: #fff;
    }
    ::selection {
        text-shadow: none;
        background: #333;
        color: #fff;
    } */

/* #__next {
	margin: 0;
	padding: 0;
	width: 100%;
} */

body {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	margin: 0;
	padding: 0;
}

body::-webkit-scrollbar {
	display: none; /* Hide scrollbar for Chrome, Safari and Opera https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp */
}

@tailwind base;
/* Write custom base styles here */
/* @font-face {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 400;
        src: url(https://fonts.googleapis.com/css2?family=Barlow%20Condensed&family=Barlow%20Semi%20Condensed&display=swap)
            format('woff2');
    }
    
    @font-face {
        font-family: 'brandon-grotesque', sans-serif;
        font-weight: 400;
        src: url(https://use.typekit.net/hzg4mdi.css) format('woff2');
    }
    
    @font-face {
        font-family: 'Montserrat', 'sans-serif';
        font-weight: 400;
        src: url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap)
            format('woff2');
    }
    
    @font-face {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        src: url(https://fonts.googleapis.com/css2?family=Playfair%20Display:wght@500&display=swap)
            format('woff2');
    } */

@font-face {
	font-family: 'goudy-bookletter-1911', serif;
	font-weight: 400;
	src: url(https://use.typekit.net/cub6off.css) format('woff2');
}

@font-face {
	font-family: 'neue-haas-grotesk-text', sans-serif;
	font-weight: 400;
	src: url(https://use.typekit.net/cub6off.css) format('woff2');
}

@font-face {
	font-family: 'neue-haas-grotesk-display', sans-serif;
	font-weight: 400;
	src: url(https://use.typekit.net/cub6off.css) format('woff2');
}

/* @font-face {
        font-family: 'neue-haas-grotesk-display', sans-serif;
        font-weight: 300;
        src: url(https://use.typekit.net/sbg1kws.css) format('woff2');
    } */

/* Start purging... */
@tailwind components;
/* Stop purging. */

/* Write custom component styles here */
/* @ {
        text-shadow: 'none';
    } */

/* Start purging... */
@tailwind utilities;
/* Stop purging. */

/* Write custom utilities here */

.html {
	@apply font-head;
	@apply font-somaRoman;
	@apply font-somaDisplay;
}

.has-text-align-left {
	@apply text-left;
}

.has-text-align-center {
	@apply text-center;
}

.has-text-align-right {
	@apply text-right;
}

.has-large-font-size {
	@apply text-4xl;
}

.alignfull {
	@apply w-screen relative;

	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	right: 50%;
}

.wp-block-image img {
	@apply max-w-full mt-2;
}
.wp-block-image.aligncenter {
	@apply text-center;
}
.wp-block-image.alignfull img,
.wp-block-image.alignwide img {
	@apply w-full;
}
.wp-block-image .alignleft,
.wp-block-image .alignright,
.wp-block-image .aligncenter,
.wp-block-image.is-resized {
	@apply table ml-0 mr-0;
}
.wp-block-image .alignleft > figcaption,
.wp-block-image .alignright > figcaption,
.wp-block-image .aligncenter > figcaption,
.wp-block-image.is-resized > figcaption {
	@apply table-caption;

	caption-side: bottom;
}

.wp-block-image .alignleft {
	@apply float-left mr-4;
}
.wp-block-image .alignright {
	@apply float-right ml-4;
}
.wp-block-image .aligncenter {
	@apply m-auto;
}

.wp-block-button a,
.wp-block-file a.wp-block-file__button {
	@apply bg-blue-500 text-white no-underline py-2 px-4;
}

.wp-block-button a:hover,
.wp-block-file a.wp-block-file__button:hover {
	@apply bg-blue-400 cursor-pointer;
}

.wp-block-file a:first-of-type {
	@apply mr-4;
}

.wp-block-cover {
	@apply flex flex-wrap justify-center items-center bg-cover bg-center overflow-hidden;

	min-height: 430px;
}

.wp-block-verse {
	@apply font-sans;
}

.wp-block-media-text {
	@apply grid grid-cols-2 gap-4;
}

.p-lead:nth-child(n + 7) {
	@apply pl-portfolioS;
}

.p-blogs:nth-child(1) {
	@apply pr-paddingAboutTitleRight;
}

.p-leads:nth-child(n + 6) {
	@apply pl-aboutOffsetPR;
}

.p-last:nth-child(n + 1):nth-child(-n + 12) {
	@apply pl-aboutOffsetPR;
}

.p-indent:nth-child(15) {
	@apply pl-aboutIndentation;
}

.p-indents:nth-child(25) {
	@apply pl-aboutIndentation;
}

@media (max-width: 639px) {
	.p-last:nth-child(n + 1):nth-child(-n + 12) {
		@apply pl-aboutOffsetPRMobile;
	}
}

.fa-portfolioDivider {
	@apply text-customTitle;
}

.block.light-mode {
	@apply bg-portfolio text-black border-fiveOBlack;
}

.block.dark-mode {
	@apply bg-black;
}

```