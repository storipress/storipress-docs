---
title: Guide to our SDK
description: ''
position: 5
category: Blocks
---

## Overview of Elements in the SDK

### Block Wrappers

As a first step, all blocks must be wrapped within a block wrapper. Block wrappers provide provide the necessary information for other elements to work.

- [Block Wrapper](/2%20StandardBlocks/2%20Wrappers#block): The wrapper for a normal Block
- [HeroBlock Wrapper](/2%20StandardBlocks/2%20Wrappers#desksection): The wrapper for a Hero Block (the first 'block' in the front page)

The main difference between these wrappers is:

- `Block` will wrap your content inside a [`Spacing`](/2%20StandardBlocks/3%20Components#spacing)component to follow a width restriction
- When you see **`HeroBlock` only**, this indicates that this element should only be used inside a `HeroBlock`. If this is not done, this may cause unexpected results.

### Data Providers

<alert Type="info">
These elements will provide data that you will need to display. Further, these elements can be separated into two categories.
</alert>

#### Static Data Providers

No matter how how many of these elements exist, these elements will always give you the same data, i.e., they provide **static data**.

- [DeskList Provider](/2%20StandardBlocks/4%20Providers#desk-list-provider): This provides the names of all 'desks' within a publication. This element is useful for nav menus, navbars, and the like.
- [Site Provider](/2%20StandardBlocks/4%20Providers#site-provider): This provides site information like its name or its links to social media.
- [Logo Provider](/2%20StandardBlocks/4%20Providers#logo-provider) This provides a logo placeholder.

#### Dynamic Data Providers

Dynamic Data Providers gives you different data for each element. Use these providers with care.

- [DeskSection Wrapper](/2%20StandardBlocks/2%20Wrappers#desksection): This provides you with the name of a desk and also sets up the source desk of its `Article` descendants.
- [Article Provider](/2%20StandardBlocks/4%20Providers#article-provider): This provides you an article. Additionally, this element must be wrapped under a `DeskSection`.

### Stylable Components

<alert Type="info">

These elements will be stylable in the Builder. You will need to use its props to style it. **Make sure to not use css that will cause conflicts!**

</alert>

#### Text Related

No matter how how many of these elements exist, these elements will always give you the same data, i.e., they provide **static data**.

- [Text Element](/2%20StandardBlocks/3%20Components#textelement): This will create stylable text which is static. This element should be used for text provided by `Article` or `DeskList`.
- [TextInput](/2%20StandardBlocks/3%20Components#textinput): This is also stylable text, however, its content is able to edited in the Builder. You should use this in other text types.

#### Background Color

Dynamic Data Providers gives you different data for each element. Use these providers with care.

- [ColorArea](/2%20StandardBlocks/3%20Components#colorarea): An element that will provide styleable background color. You should use this to create areas with different background colors.

### Other Block Content

You must use these elements when the condition of each elements matches. This will make sure your block will work as expected in Storipress.

- [LinkElement](/2%20StandardBlocks/3%20Components#linkelement): You should use this to replace the `<a>`

### Width Restriction in Blocks

In Storipress, there is a requirement that all blocks have the same width to avoid visual inconsistencies. Hence, you must remove the top level width limit on all blocks and allow for these elements to control it.

- [SpacingProvider](/3%20HeroBlocks/4%20SpacingProvider): **`HeroBlock` only.** Provides the the width restriction value for other blocks.
- [Spacing](/2%20StandardBlocks/3%20Components#spacing): Applies the width restriction and adds the padding around. By default, content in `Block` is wrapped within this component so in most cases you won't need this. View its documentation to understand when to use this.

### Menu Related

Some elements that you may need for building a menu.

- [Portal](/3%20HeroBlocks/2%20Portal): **`HeroBlock` only.** This can help you to render your content at the end of root div. It has some important caveats. Please ensure you have read the docs before using this.

## SDK Data Schema

The schema for `data.js` in TypeScript:

```typescript
interface Data {
  logo: string
  site: Site
  desks: string[]
  pages: string[]
  articles: Article[] | Record<string, Article[]>
  article?: Article
  /// default is '100%'
  spacing?: string
}

interface Site {
  name: string
  facebook?: string | null
  twitter?: string | null
}

interface Article {
  title: string
  blurb: string
  url: string
  time: Date
  headline: string
  headlineCaption?: string
  headlineAlt?: string
  authors: Author[]
}

type Author = string | AuthorObject

interface AuthorObject {
  name: string
  url: string
}
```

- `logo`: The logo url. You can set it to any url that point to image. It's used byd `Logo`d so you can left it as a empty string if you didn't use thed `Logo`d element.
- `site`: The site information. It's used byd `Site`d element.
- `desks`: A list of name of desks. It's used byd `DeskSection`,d `DeskList`d andd `Article`.
- `articles`: Article data. It's used byd `Article`
- `article`: A single article. It's the article when you are developing a article template
- `spacing`: The width of a block. If value is `'80%'`, → makes width 80%. This value will be picked up by thed `Spacing`d element inside the `Block`, and will be overridden by the `SpacingProvider` when you are developing a Hero Block.

### Note for the `Author` Component

You can only pass a string array. Storipress will automatically convert it to `{ name: <original string>, url: '#' }`
