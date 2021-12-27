---
title: Providers
description: ''
position: 14
category: Standard Blocks
---

Providers pull additional data from the CMS to populate blocks. Here, you can pull things like article titles, social share links, and logos.

## Article Provider

<alert type="info">The Article Provider (Article) populates a `DeskSection` with articles. _Use flex order or css grid to reorder the articles for RWD._</alert>

<alert type="danger">**DO NOT** create a duplicate `Article` and control its visibility on viewport size. This will not work.</alert>

#### Example:

```vue
<template>
  <HeroBlock :block="block">
    <SpacingProvider>
      <!-- content -->
    </SpacingProvider>
    <!-- content -->
    <Spacing>
      <!-- content -->
    </Spacing>
  </HeroBlock>
</template>
```

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>
  <code-block active>

```js
interface {
  /// the article info
  article: Article
}
interface Article {
  /// the headline image url of the article
  headline: string
  /// the title of the article
  title: string
  /// the blurb of the article
  blurb: string
  /// the desk name of the article
  desk: string
   /// the desk url of the article
  deskUrl: string
  /// the link to the article
  url: string
  /// the author's names
  authors: Author[]
  /// the publish time of the article
  time: Date
}
interface Author {
  name: string
  url: string
}
```

  </code-block>
    </td>
  </tr>
</table>

## Desk List Provider

<alert type="info">This provider returns a list of all desks within a publication — useful for menus or navbars. Unlike `DeskSection` or `Article`, this component will return the same result every time it is used.</alert>

#### Example

```vue
<template>
  <HeroBlock :block="block">
    <DeskList v-slot="{ desks }">
      <!-- content... -->
    </DeskList>
  </HeroBlock>
</template>
```

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>
    <code-block active>

```js
interface {
  /// the desks
  desks: Desk[]
}
interface Desk {
  id: string
  name: string
  url: string
}
```

  </code-block>
    </td>
  </tr>
</table>

## PageList Provider

<alert type="info">This provider returns a list of all static pages within a publication — useful for menus or navbars. Unlike `DeskSection` or `Article`, this component will return the same result every time it is used.</alert>

#### Example

```vue
<template>
  <HeroBlock :block="block">
    <PageList v-slot="{ pages }">
      <!-- content... -->
    </PageList>
  </HeroBlock>
</template>
```

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>

  <code-block active>

```js
interface {
  /// the pages
  pages: Page[]
}
interface Page {
  name: string
  url: string
}
```

  </code-block>
    </td>
  </tr>
</table>

## Logo Provider

<alert type="info">This provider returns a publication's logo. Use CSS to style the outer `div`.</alert>

#### Basic Example

```vue
<template>
  <HeroBlock :block="block">
    <Logo />
  </HeroBlock>
</template>
```

#### Example with usage of `kind`

```vue
<template>
  <HeroBlock :block="block">
    <Logo />
    <!-- add a unique value for `kind` if you have multiple logo in same block -->
    <Logo kind="logo-2" />
  </HeroBlock>
</template>
```

#### Example of styling the `logo` component using CSS in HTML

```html
<div class="relative">
  <img class="w-full h-full" src="path/to/logo" />
</div>
```

| Props  | Type     | Mandatory? | Description                                                                                                                                |
| ------ | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `kind` | `string` | ❌         | Same as `kind` for other stylable components, but it has a default value logo. You'll only need this if you have multiple logos in a block |

The `Logo` component does not have any slots.

## Site Provider

<alert type="info">This provider returns returns the name of your publication and its associated profile information (e.g. URLs for social media links). Unlike `DeskSection` or `Article`, this component will return the same result every time it is used.</alert>

#### Basic Example

```html
interface Site { name: string facebook?: string twitter?: string }
```

#### Using `site.facebook` + `site.name` for social links and `TextInput` default text.

```vue
<template>
  <HeroBlock :block="block">
    <Site v-slot="{ site }">
      <TextInput kind="site-title" component="h1" :defaultValue="site.name" />
      <LinkElement v-if="site.facebook" :href="site.facebook">
        <TextInput kind="social-link" defaultValue="Facebook" />
      </LinkElement>
    </Site>
  </HeroBlock>
</template>
```

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>

  <code-block active>

```js
interface {
  /// the desks
  site: Site
}
interface Site {
  name: string
  facebook?: string
  twitter?: string
}
```

  </code-block>
    </td>
  </tr>
</table>
