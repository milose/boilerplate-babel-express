# boilerplate-babel-express

A simple boilerplate to kickstart a project with babel and express.

## Features

-   Compiles modern JavaScript with Babel.
-   Uses Babel watcher for development.
-   Using [Standard](https://standardjs.com) style.
-   Pre-Commit Git Hooks for linting.
-   Testing with [Jest](https://github.com/facebook/jest).
-   Utility commands.

## Getting Started

```sh
git clone git@github.com:milose/boilerplate-babel-express.git
rm -rf .git/
git init  # optional, initialize your own repository
yarn # install dependencies, use npm install if you do not use yarn
cp .env.example .env
```

## How to Run the Application?

The app should start on the port configured in the `.env` file.

-   development

    ```sh
    yarn watch # or npm run watch
    ```

-   production

    ```sh
    yarn start # or npm run start
    ```

## Code Linting

This boilerplate ships with [`eslint`](https://github.com/eslint/eslint), [`prettier`](https://github.com/prettier/prettier) and [`prettier-standard`](https://github.com/sheerun/prettier-standard). It also uses [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) to lint the files before they are commited. However, you can always use:

```sh
yarn lint # or npm run lint
```

## Testing

This boilerplate uses Jest. Tests are located in `tests` directory, which is configured in `package.json`. To run tests just execute:

```sh
yarn test # or npm run test
```

## Additional Commands

-   Compiling the `build` directory:

    ```sh
    yarn build # or npm run build
    ```

-   To remove `build` directory:

    ```sh
    yarn clean # or npm run clean
    ```

-   To remove both `build` and `node_modules` directory:

    ```sh
    yarn clean:all # or npm run clean:all
    ```

## License

[The MIT License](https://milose.mit-license.org) @ 2019
