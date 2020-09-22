# windy-city-next

## Important!

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
