# Hippo Summary WebSite Template

Visit the live website at [summarywebsitetemplate.internal.hippodigital.cloud](https://summarywebsitetemplate.internal.hippodigital.cloud/).

# Getting Started

1. checkout the project

```bash
git clone git@github.com:hippo-digital/engineering-data-handbook.git
```

2. install Node.js 18

    a. check your current version of Node.js

    ```bash
    node --version
    ```

    b. If you have the wrong version or Node.js is not installed

    Download it from the [Node.js website](https://nodejs.dev/) or use [nvm](https://github.com/nvm-sh/nvm) (recommended)

    ```bash
    nvm use
    ```

3. install all required packages

```bash
npm install
```

4. run the development server:

```bash
npm run dev
```

5. open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing with Google Single sign-on

1. create a `.env.local` file with following variables:

```bash
GOOGLE_CLIENT_ID=insert the client id
GOOGLE_SECRET=insert the secret
```

Ask @colin for the secrets that are needed.

2. make sure this file isn't committed.
3. restart the server.
4. open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

Tests will run as a pre-commit hook, when creating new Pull Requests, and when code is merged into the main branch.

To run tests locally:

```bash
npm test
```

Playwright is used for end-to-end testing which opens a browser and navigates like a user.

You'll need to download the Playwright specific dependencies with:

```bash
npx playwright install --with-deps chromium
```

### Debugging

In order to run the Playwright tests in a visual mode (so you can see what they're actually doing), just run:

```bash
npm run test:open
```

## Linting

Linting will also run as a pre-commit hook, when creating new Pull Requests, and when code is merged into the main branch.

To run linting locally:

```bash
npm run lint
```

To auto-fix any auto-fixable linting issues, run:

```bash
npm run lint:fix
```
