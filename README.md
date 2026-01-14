# Shloop

## What is this?

Shloop is a template for creating React full stack apps with Material UI.

## Features

- **Put your feature here!**
  - Explain your feature.

## Run Locally

To run the `main` branch locally for personal or development purposes, the steps are as follows:

### Setup

1. Install [Git](https://git-scm.com/downloads)

1. Install [Node.js](https://nodejs.org/en/download)

### Run Build Locally

If you only plan to use the application, it is recommended to run a build for faster runtime. The steps to create and run one are as follows:

1. Every time you update the code, run the appopriate build script:
    - On Windows, double-click [build.bat](build.bat) to run it.
    - On MacOS and Linux, run [build.sh](build.sh).

1. Once the build completes, run the appropriate start script:
    - On Windows, double-click [start.bat](start.bat) to run it.
    - On MacOS and Linux, run [start.sh](start.sh).

1. Visit http://localhost:3000 in your browser to access the site.

### Develop Locally

If you plan to make changes to the application, the steps are as follows:

#### Setup

1. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

1. Install the dependencies with:
    ```bash
    yarn install
    ```

1. Install the server's dependencies with:
    ```bash
    cd server
    yarn install
    ```

1. Create a file `.env.development.local` with the content:
    ```
    VITE_DEV_SERVER = "http://localhost:3001"
    ```

#### Running the App

1. Run the client in one terminal with:
    ```bash
    yarn start
    ```

1. Run the server in a second terminal with:
    ```bash
    cd server
    yarn start
    ```

1. Visit http://localhost:3000 in your browser to access the site.
