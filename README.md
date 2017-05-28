# Ten Ideas a Day

Deployed to [mocon.github.io/ten-ideas-a-day](https://mocon.github.io/ten-ideas-a-day/) on pushing to the `gh-pages` branch.

## Important notes

For the project to build, *these files must exist with exact filenames*:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack. You need to *put any JS and CSS files inside `src`*, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`. Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### Live Development

```
yarn start
```

Runs the app in the development mode. Open [localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Testing

```
yarn test
```

Launches the test runner in the interactive watch mode.

### Build

```
yarn build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is ready to be deployed!

### Deploy

```
yarn run deploy
```

Deploys the `master` branch to [mocon.github.io/ten-ideas-a-day](https://mocon.github.io/ten-ideas-a-day/) by merging it to the `gh-pages` branch.

### Clean

```
yarn run clean
```

Deletes the `node_modules` directory, cleans the Yarn cache, and reinstalls the dependencies.
