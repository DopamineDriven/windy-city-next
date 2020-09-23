# windy-city-next

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
