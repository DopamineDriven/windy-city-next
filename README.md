# windy-city-next

## genql

- https://github.com/remorses/genql

## Configuring lightsail SSL/TSL

## Sitemap

- https://github.com/vercel/next.js/issues/9051

## @apollo/client v3: migrate from apollo-client et al. v2

- https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/

## HTTPS connections to Amazon LightSail HWP Server

- Connect to Linux instance using SSH
- Bitnami terminal opens
- Enter the following to access wp-config.php

```git
sudo vi /opt/bitnami/apps/wordpress/htdocs/wp-config.php
```

- this opens VIM
- enable -- INSERT -- mode

```vim
I
```

- Delete the following two lines of code

```vim
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/');
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/');
```

- Add the following in its place

```vim
define('WP_SITEURL', 'https://' . $_SERVER['HTTP_HOST'] . '/');
define('WP_HOME', 'https://' . $_SERVER['HTTP_HOST'] . '/');if (isset($_SERVER['HTTP_CLOUDFRONT_FORWARDED_PROTO'])
&& $_SERVER['HTTP_CLOUDFRONT_FORWARDED_PROTO'] === 'https') {
$_SERVER['HTTPS'] = 'on';
}
```

- Save the file; press escape, then

```
:wq!
```

- restart the apache server

```git
sudo /opt/bitnami/ctlscript.sh restart Apache
```

## Useful supps

- https://github.com/arunoda/bulletproof-next-app/tree/using-dynamic-imports-final

### Generate a random secret

- open the terminal, type "node", hit enter
- next, input the following:

```git
require('crypto').randomBytes(64).toString('hex')
```

- this returns a 122-character hexadecimal string

## Accessing wp-config.php through bitnami in Amazon LightSail

- open bitnami and enter

```git
sudo vim /opt/bitnami/apps/wordpress/htdocs/wp-config.php
```

- this opens VIM
- Next, press `I`

```vim
I
```

- this enables --&nbsp;INSERT&nbsp;-- mode in Vim
- proceed with editing, define `GRAPHQL_JWT_AUTH_SECRET_KEY` towards the bottom of the file

```php
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('WP_TEMP_DIR', '/opt/bitnami/apps/wordpress/tmp');
define('GRAPHQL_JWT_AUTH_SECRET_KEY', '122-digit-hex-value generated using node terminal');
```

- to save changes, enter

```vim
:wq!
```

- to exit without saving, enter

```vim
:qa!
```

- this successfully saves and exits the Vim editor
- if no changes are required after opening the Vim editor, then

```git
:qa!
```

- this exits the vim editor without saving any changes
- whew, lad
- https://www.vim.org/
- https://developer.wordpress.org/cli/commands/

## Enable WPGraphQL JWT Authentication Plugin via WP Engine GraphiQL plugin

- after enabling, open GraphiQL interface

```gql
mutation Login {
	login(
		input: {
			clientMutationId: "uniqueId"
			password: "insert password"
			username: "nextjsheadless"
		}
	) {
		refreshToken
	}
}
```

- this returns a refresh token value for the WORDPRESS_AUTH_REFRESH_TOKEN key in .env.local
- set the value of the WORDPRESS_PREVIEW_SECRET key to any url-friendly string

```ts
href={`localhost:3000/api/preview?secret=${process.env.WORDPRESS_PREVIEW_SECRET}&id=${draft.id}`}
```

## View drafts locally or on the deployed site

- append the following relative path on the landing page url
- /api/preview?secret=secret-path&id=target-id
- where - secret-path = /preview-mode - target-id = id of the unpublished post (determined via phpmyadmin)
- this will load the corresponding post
- for example, try

```url
https://headless-wp-next-directory.vercel.app/api/preview?secret=/preview-mode&id=22
```

## Yosef

- you can start adding md in `yosef.md` in the root for now

- https://windycitydevs.io

## Domains redirecting to .io

- https://www.windycitydevs.io
- https://windycitydevs.llc
- https://windycitydevs.llc
- https://windycitydevs.app
- https://www.windycitydevs.app
- https://windycitydevs.dev
- https://www.windycitydevs.dev
- https://windycitydevs.digital
- https://www.windycitydevs.digital
- https://windycitydevs.com
- https://www.windycitydevs.com
- https://windycitydevs.co
- https://www.windycitydevs.co
- https://windycitydevs.net
- https://www.windycitydevs.net
- https://windycitydevs.tech
- https://www.windycitydevs.tech
- https://windycitydevs.wtf
- https://www.windycitydevs.wtf
- https://windy-city-next.vercel.app

## WebManifest and fa

- **very useful**
- https://favicon.io/favicon-converter/
- https://app-manifest.firebaseapp.com/
- https://w3c.github.io/manifest/

## Top Tailwind CSS Plugins

- https://www.telerik.com/blogs/top-15-tailwind-css-plugins-resources
- https://github.com/jorenvanhee/tailwindcss-debug-screens

## TypeScript Maniplating React Prop Types

- https://medium.com/@rossbulat/typescript-react-manipulating-prop-types-ec13f841a550

## TypeScript Generics

- https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f

## nextjs-page-transitions

- https://github.com/wrongakram/nextjs-page-transitions

## Configure method to reveal user ISP

- https://www.3whitehats.com/knowledge/how-to-get-service-provider-back-in-google-analytics

## Google Analytics Added

- https://github.com/react-ga/react-ga
- https://github.com/react-ga/react-ga/blob/master/demo/app/Events.jsx
- https://coderrocketfuel.com/article/add-google-analytics-to-a-next-js-and-react-website
- https://analytics.google.com/analytics/web/#/a177780141w246030893p228624158/admin/tracking/tracking-code/

## Important

- Do not update autoprefixer to version 10 or higher
- Why?

  - It introduces breaking changes that interfere with next's postcss-loader on yarn dev
  - Rolling back to autoprefixer@9.8.6 resolved the "true is not a PostCSS plugin" error

- tentative flow

```txt
<Header>
WCD Logo (possibly with a group photo of us next to it)
</Header>
<Page Body>
About WCD Overview
Services short blurb with sub-page link
Projects short blurb with sub-page link
Individual Co-Founder Icons with "Abouts" sub-pages linked (Portfolio, Linked-In, About me paragraph)
</Page Body>
<Footer>
Back to top
Facebook Link
Linked-In Link
Twitter Link
Google Page Link
</Footer> (edited)
```
