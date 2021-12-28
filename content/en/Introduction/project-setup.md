---
title: Project Setup
description: ''
position: 2
category: Blocks
---

## Preparation

clone [Builder-Blocks](https://github.com/storipress/Builder-Blocks) and copy `boilerplate` folder

<alert Type="warning">Do not develop directly under `Builder-Blocks/boilerplate`</alert>

## Project Structure

Important directories / files you should know before you get started:

- `src/block`: Where your block lives
- `src/block/block.jsonc`: Metadata for your block — important to fill it out before upload so Storipress nows how to categorise your custom block. Its format is `json with comment`, so you can treat it as normal json file.
- `src/data.js`: Mock data for your block so you can better visualise your design. You can edit it for better data
- `tailwind.config.js`: Config file for `tailwindcss`. See [TailwindCSS Config](/1%20Blocks/1%20ProjectSetup#tailwindcss-config) for instructions on how to propose a new class.
- `package.json`: File for metadata and dependency list. See our [Dependency Policy](/1%20Blocks/1%20ProjectSetup#dependency-policy---not-relevant-for-public-docs) for instructions on how to add a new dependency.

<alert Type="info">Generally, you should not edit any other files. If the config doesn't match your needs, shoot us a message over Slack.</alert>

## Geting Started

The boilerplate is set up using Yarn v2, but you can use NPM if you wish. Instructions for both are below

### Set up

#### Yarn Set up

Installation instructions for Yarn can be found [here](https://yarnpkg.com/getting-started/install). Ensure you have global `yarn` installed by running the below command outside of this project:

```
$ yarn --version
1.22.5
```

If you see version `1.x.x`, then you're all set! Yarn v2 is already included in this boilerplate. Try to run the same command under this project:

```
$ yarn --version
2.4.0
```

After this, you can install the dependencies by running:

```bash
yarn install
```

#### NPM Set up

```bash
npm install
```

### Development Server

<code-group>
  <code-block label="Yarn" active>

```bash
yarn serve
```

  </code-block>
  <code-block label="NPM">

```bash
npm run serve
```

  </code-block>
</code-group>

<alert Type="info">The dev server supports HMR (Hot Module Replacement) so you can code and preview the result at the same time 🚀</alert>

### Linting

Before uploading your block, ensure it passes the linter. To lint your block, run:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn lint
```

  </code-block>
  <code-block label="NPM">

```bash
npm run lint
```

  </code-block>
</code-group>

<alert Type="info">The linter will automatically try to fix any problems for you. If the linter in unable to fix these issues, you must fix them before uploading.</alert>

## TailwindCSS Config

TailwindCSS is a powerful tool due to its flexibility — you can easy to add a new class by editing the config file. However, as all blocks must be built with the same config file, it is not recommended that you edit your config file in local.

### New classes

If you require a new class, [we recommend you use Tailwind JIT](https://v2.tailwindcss.com/docs/just-in-time-mode).

<alert> Storipress comes out of the box with Tailwind JIT installed. Easy peasy!</alert>

Tailwind JIT supports arbitrary classes via the use of square brackets. For example, to add a 20rem bottom padding, use `pb-[20rem]`, or `pb-[320px]`, etc.

## Dependency Policy - _not relevant for public docs_

You can use following packages without restrictions:

- [lodash](https://lodash.com/) : Utilities functions
- [date-fns](https://date-fns.org/) : Date manipulating and formating
- [tailwindcss](https://tailwindcss.com/) : Utilities-first style framework
- And of course `Vue.js`, but **NO** `Vuex` or `vue-router`

If you want to add other dependancies, it is recommended you meet the following checklist:

1. **Have an Open Source License** and **not be GPL-like**
2. **It must not** register anything to global (You don't need to use `Vue.use`)
3. If it includes css, **it must not** pollute global css (i.e. uses scope css, css module or including prefix for class names)
4. Try to keep it small to keep your site performant
5. The package **must be Vanilla Javascript or Vue.js**
6. It **should not be bundeled by webpack**, or it will slow your build times.
7. The package should be maintained.
8. All in all, if you can, it probably is a better idea if you reuse our existing packages

## VSCode

This boilerplate includes the config files for [Visual Studio Code](https://code.visualstudio.com/). It may be easier for you if you use VSCode; but you can use your favorite tool(s).

For your code editor config, these are our recommended extensions:

- [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Integrates with tailwindcss and provides auto completion.
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates eslint into VSCode. With this extension, you can see eslint check result in your editor
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Integrates prettier into VSCode. It will format your code when you save a file.
- [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint): Integrates stylelint into VSCode. It will help you check your styles

## Checklist before you upload

1. Run `yarn lint` (or `npm run lint`) and ensure you pass the checks
2. Ensure you've have filled out the meta in the `src/block/block.jsonc`
3. Take a look in your devtool console (in Chrome/Firefox press `F12`, or `Ctrl/Cmd + Shift + I`) and make sure there is no error/warning from Vue
4. Ensure you've included a preview image

<alert Type="info">Please take a screenshot of your block at 1200px wide after you pass the visual check and include it in your submission. Name the screenshot `preview.png`</alert>

## Naming your submission

Name the root folder of each block.

## How to submit your work

To submit your work, create a Pull Request. To create a PR you have two options:

### Branch in Builder-Blocks Repo

1. Clone the [`Builder-Blocks`](https://github.com/storipress/Builder-Blocks) to your local
2. Create a new branch via `git checkout -b <branch-name>`
3. Copy the directory `src/block` of your work under the category name of your block. Ensure you rename it to follow the naming rules.
4. Commit and push current branch to Github via `git push -u origin <branch-name>`
5. Create a PR on the [Github Repo](https://github.com/storipress/Builder-Blocks/pulls)

### Private Fork

1. Fork [`Builder-Blocks`](https://github.com/storipress/Builder-Blocks) under your Github account via **PRIVATE FORK**
2. Clone your fork to the local
3. Create a new branch via `git checkout -b <branch-name>`
4. Copy directory `src/block` of your work under the category name of your block. Ensure you rename it to follow the naming rules.
5. Commit and push current branch to Github via `git push -u origin <branch-name>`
6. Create a PR on the [Github Repo](https://github.com/storipress/Builder-Blocks/pulls)
