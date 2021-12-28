---
title: Components
description: ''
position: 33
category: Article Templates
---

The components for Aritcle Templates allow the user to associate content with schematypes without code (or understanding code).

## `<Header>`

<alert type="info">
Used to wrap header content like titles and blurbs.
</alert>

It also contains a `ColorArea`, allowing a publisher to adjust the bg color without code.

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header> </Header>
  </ArticleBlock>
</template>
```

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>description</td>
  </tr>
  <tr>
    <td>backgroundColor</td>
    <td>string</td>
    <td>❌</td>
    <td>An opaque object, you must pass it</td>
  </tr>
</table>

## `<Title> / <Description> / <Desk>`

Pretty self explanatory. These components provide an article's title, description, and desk. Think of them a pre-configured `TextElement` for articles.

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for their props.

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header>
      <Desk underline />
      <Title :fontSize="32" />
      <Description />
    </Header>
  </ArticleBlock>
</template>
```

## `<HeadlineImage>`

`HeadlineImage` displays the hero image of an article.

**CAVEATS:**

1. `HeadlineImage` requires a set height and width as Storipress uses `position: absolute` to position the headline image around its focal point.
2. _If_ you are using relative height like `80%` or `80vh`, `HeadlineImage` requires a fixed `max-height` (e.g. `600px`, `48rem`).

#### Example:

```vue
<template>
  <HeadlineImage class="w-full h-96" />
</template>
```

## `<HeadlineCaption>`

`HeadlineCaption` displays the headline Caption.

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for props.

#### Example:

```vue
<template>
  <figure>
    <HeadlineImage />
    <HeadlineCaption align="center" />
  </figure>
</template>
```

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>description</td>
  </tr>
  <tr>
    <td>component</td>
    <td>string</td>
    <td>❌</td>
    <td>The rendered element. By default it is figcaption</td>
  </tr>
</table>

## `<Date>`

Provides an article's publication date. It's also a stylable element with the addition of a `format` prop to specify the display format.

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for props.

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header>
      <Date format="d MMMM yyyy, p" />
    </Header>
  </ArticleBlock>
</template>
```

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>format</td>
    <td>string</td>
    <td>❌</td>
    <td>
  The date format string. See [date-fns document](https://date-fns.org/v2.21.1/docs/format) for more details. Default value is `MMM-dd-yyyy hh:mma O`</td>
  </tr>
</table>

## `<AuthorList>`

The wrapper for an author list.

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header>
      <AuthorList> By <Authors /> </AuthorList>
    </Header>
  </ArticleBlock>
</template>
```

## `<Authors>`

A provider which returns the name(s) the author(s) of an article.

<alert> This provider is the only way to obtain the author list for now. Let us know if you require more functionality for your use case.</alert>

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for other props to control the style of author names.

<alert type="info">

For multiple authors, we recommend the following format: `[1st author], [2nd author]... [last author]`. This is the default style of this component.

</alert>

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header>
      <AuthorList> By <Authors /> </AuthorList>
    </Header>
  </ArticleBlock>
</template>
```

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>string</td>
    <td>❌</td>
    <td>The separator between the author names. Default: ,</td>
  </tr>
  <tr>
    <td>authorClass</td>
    <td>string</td>
    <td>❌</td>
    <td>Use this if you want to add extra class to author name</td>
  </tr>
  <tr>
    <td>separatorClass</td>
    <td>string</td>
    <td>❌</td>
    <td>Use this if you want to add extra class to separator</td>
  </tr>
</table>

## `<LinkElement>`

The `LinkElement` is a simple component which replaces the HTML `a` tag, adding a layer abstraction which allows Storipress to easily swap the `a` tag.
<
<alert> Use this element whenever an a tag is required.</alert>

#### Example:

```vue
<template>
  <LinkElement href="https://example.com">link</LinkElement>
</template>
```

## Date

This provider returns the publish date of an article. It's also a stylable element with the addition of a `format` prop to specify the display format

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for other props

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header>
      <Date format="d MMMM yyyy, p" />
    </Header>
  </ArticleBlock>
</template>
```

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>href</td>
    <td>string</td>
    <td>✅</td>
    <td>The link target, same as a HTML a href</td>
  </tr>
</table>

<table>
  <tr>
    <td>Slots</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>The content</td>
  </tr>
</table>

## `<ArticleBlock>` (Body Content)

The `ArticleBlock` wraps the article's content.

**Only these elements should be placed inside this wrapper.**

- Header1
- Header2
- Paragraph
- Blockquote

#### Example:

```vue
<template>
  <ArticleBlock>
    <Header> </Header>
  </ArticleBlock>
</template>
```

## Default styles for H1/H2/Paragraph in article content

These elements provide the default style in the article content. Think of these as pre-configured `TextElement`s

See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for other props

#### Example:

```vue
<template>
  <ArticleBlock>
    <Content>
      <Header1 :fontSize="32" />
      <Header2 :fontSize="28" />
      <Paragraph />
    </Content>
  </ArticleBlock>
</template>
```

<alert Type="info">If you want to add extra styles. Style like the following:</alert>

```css
.article-content {
  h1 {
    // for Header1
  }

  h2 {
    // for Header2
  }

  p {
    // for Paragraph
  }
}
```

## `<Blockquote>`

This element provides the default style of a blockquote in the article content.

Think of this as a pre-configured `TextElement`. See [`TextElement`](/2%20StandardBlocks/3%20Components#textelement) for other props

<alert Type="warning"> You should not add any extra styles to this component</alert>

#### Example:

```vue
<template>
  <ArticleBlock>
    <Content>
      <Blockquote />
    </Content>
  </ArticleBlock>
</template>
```

## ArticleInfo Provider

This provider grabs the article data + its associated social sharing links.

<alert> Unlike `DeskSection` or `Article`, `ArticleInfo` will return the same list every time it is used. </alert>

#### Example:

```typescript
interface {
	article: Article
	socials: Socials
}

// same as article object
interface Article {
  title: string
  blurb: string
  desk: string
	deskUrl: string
  url: string
  time: Date
  headline: string
  headlineCaption?: string
  headlineAlt?: string
  authors: Author[]
}

interface Socials {
  email: string
  facebook: string
  twitter: string
}
```

#### Example: Using `ArticleInfo` to display an article's social sharing buttons.

```vue
<template>
  <ArticleBlock>
    <ArticleInfo v-slot="{ socials }">
      <LinkElement :href="socials.facebook">
        <!-- icon -->
      </LinkElement>
    </ArticleInfo>
  </ArticleBlock>
</template>
```

## Site Provider

This provider inserts the name of the publication and its associated social profile info, (e.g. the publication's social media links).

<alert> Unlike `DeskSection` or `Article`, you will get the same list every time you use this component, so use this element whenever the list is required. </alert>

#### Example:

```typescript
interface Site {
  name: string
  facebook?: string
  twitter?: string
}
```

#### Example: Using `Site` to display social media links or provide `TextInput` defaults.

```vue
<template>
  <HeroBlock :block="block">
    <Site v-slot="{ site }">
      <TextInput
        kind="site-title"
        blockType="Site Title"
        component="h1"
        :defaultValue="site.name"
      />
      <LinkElement v-if="site.facebook" :href="site.facebook">
        <TextInput
          kind="social-link"
          blockType="Social Link"
          defaultValue="Facebook"
        />
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

```typescript
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

## Utilities

#### Template

A base element to help you reduce element imports by including all the above elements. You write this originally

#### Example:

```js
import { Article, Title, Description } from '@storipress/article'

export default {
  components: { Article, Title, Description },
}
```

With this, you just need to:

```js
import { Template } from '@storipress/article'

export default Template.extend({})
```
