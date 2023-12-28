# En-passant

[![Node.js](https://img.shields.io/badge/Node.js-v20-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/es/)
[![npm](https://img.shields.io/badge/npm-v10-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/React-v18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-v7-FF4785?style=flat-square&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![License](https://img.shields.io/badge/License-MIT-0088cc?style=flat-square&logo=github)](https://github.com/lmisea/en-passant/blob/main/LICENSE)

A friendly chess platform built with [react](https://reactjs.org/) and [typescript](https://www.typescriptlang.org/).

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (^20.10.0).
- [npm](https://www.npmjs.com/) (^10.2.5).

### Installation

1. Clone the repo.
   ```bash
   git clone https://github.com/lmisea/en-passant.git en-passant
   cd en-passant
   ```
2. Install npm packages.
   ```bash
    npm install
   ```
3. Run the prepare script for setting up the git hooks.
   ```bash
   npm run prepare
   ```

### Development

1. _Vite.js_ starts the development server on the localhost.
   ```bash
   npm run dev
   ```
2. Start the storybook server.
   ```bash
   npm run storybook
   ```

### Production

1. _Vite.js_ builds the app into a static site on the `dist` folder.
   ```bash
   npm run build
   ```
2. After building the app, _vite.js_ will also allow you to preview the build on the localhost.
   ```bash
   npm run preview
   ```
