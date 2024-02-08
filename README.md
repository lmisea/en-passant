# EnPassant

[![Node.js](https://img.shields.io/badge/Node.js-v20-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/es/)
[![yarn](https://img.shields.io/badge/yarn-v4-2E2A65?style=flat-square&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![React](https://img.shields.io/badge/React-v18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite.js](https://img.shields.io/badge/Vite.js-v5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-v7-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-v2-319795?style=flat-square&logo=chakra-ui&logoColor=white)](https://chakra-ui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-0088cc?style=flat-square&logo=github)](https://github.com/lmisea/en-passant/blob/main/LICENSE)

A friendly chess platform built with [react](https://reactjs.org/) and [typescript](https://www.typescriptlang.org/).

## Getting started

### Prerequisites

- [Node.js v20](https://nodejs.org/en/).

### Installation

1. Clone the repo.

   ```bash
   git clone https://github.com/lmisea/en-passant.git en-passant
   cd en-passant
   ```

2. Enable corepack in Node.js v20 for being able to use yarn v4.

   ```bash
   corepack enable
   ```

3. Install dependencies.

   ```bash
   yarn install
   ```

4. Run the prepare script for setting up the git hooks.
   ```bash
   yarn prepare
   ```

### Development

1. _Vite.js_ starts the development server on the localhost.

   ```bash
   yarn dev
   ```

2. Start the storybook server.

   ```bash
   yarn storybook
   ```

3. For updating the dependencies, run the following command.

   ```bash
   yarn upgrade-interactive
   ```

### Production

1. _Vite.js_ builds the app into a static site on the `dist` folder.

   ```bash
   yarn build
   ```

2. After building the app, _vite.js_ will also allow you to preview the build on the localhost.

   ```bash
   yarn preview
   ```

## Attributions

All the attributions are located in the [ATTRIBUTIONS.md](https://github.com/lmisea/en-passant/blob/main/ATTRIBUTIONS.md) file.

## License

Distributed under the MIT License. See [LICENSE](https://github.com/lmisea/en-passant/blob/main/LICENSE).
