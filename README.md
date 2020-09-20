# windy-city-next

## Important!

- Do not update autoprefixer to version 10 or higher
- Why?
  - It introduces breaking changes that interfere with next's postcss-loader on yarn dev
  - Rolling back to autoprefixer@9.8.6 resolved the "true is not a PostCSS plugin" error
