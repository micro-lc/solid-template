[![Build Status][github-actions-svg]][github-actions]
[![Coverage Status][coverall-svg]][coverall-io]
[![Mia-Platform](https://img.shields.io/badge/Supported%20by-Mia--Platform-green?style=for-the-badge&link=https://mia-platform.eu/&color=DE0D92&labelColor=214147)](https://mia-platform.eu/?utm_source=referral&utm_medium=github&utm_campaign=micro-lc)


## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

[github-actions]: https://github.com/micro-lc/micro-lc-solid-template/actions
[github-actions-svg]: https://github.com/micro-lc/micro-lc-solid-template/actions/workflows/build.yml/badge.svg?branch=main
[coverall-svg]: https://coveralls.io/repos/github/micro-lc/micro-lc-solid-template/badge.svg?branch=main
[coverall-io]: https://coveralls.io/github/micro-lc/micro-lc-solid-template?branch=main