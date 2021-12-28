---
title: SEO Tag Styleguide
description: ''
position: 6
category: Blocks
---

<alert Type="info">It is recommended that blocks have H1/H2/H3 SEO tags applied. This styleguide provides a reference to what tags should be used where.</alert>

### H1/H2/H3 SEO Tag Styleguide

<table>
  <tr>
    <td>**Block Type**</td>
    <td>**Element Type**</td>
    <td>**Tag**</td>
  </tr>
  <tr>
    <td>Hero Block</td>
    <td>Article Titles</td>
    <td>H2</td>
  </tr>
  <tr>
    <td>Hero Block</td>
    <td>Desk or textInput</td>
    <td>H4</td>
  </tr>
  <tr>
    <td>Hero Block Sidebar</td>
    <td>All Elements</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Body Block</td>
    <td>Article Titles</td>
    <td>H3</td>
  </tr>
  <tr>
    <td>Body Block</td>
    <td>Desk or textInput</td>
    <td>H4</td>
  </tr>
  <tr>
    <td>Footer</td>
    <td>Links</td>
    <td>H5</td>
  </tr>
</table>

### Hero Block

All article titles should have a `h2` tag applied

```vue
<template>
  <Block :block="block">
    <DeskSection :order="0">
      <ArticleBlock v-slot="{ article }">
        <Text component="h2" kind="article-title" blockType="Article Title">{{
          article.title
        }}</Text>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>
```

### Standard Blocks

All article titles should have a `h3` tag applied

```vue
<template>
  <Block :block="block">
    <DeskSection :order="0">
      <ArticleBlock v-slot="{ article }">
        <Text component="h3" kind="article-title" blockType="Article Title">{{
          article.title
        }}</Text>
      </ArticleBlock>
    </DeskSection>
  </Block>
</template>
```

All `TextInput` / `Desk` should have a `h4` tag applied

```vue
<template>
  <Block :block="block">
    <DeskSection :order="0" v-slot="{ desk }">
      <TextInput component="h4" kind="desk-name" blockType="Desk Name">{{
        desk
      }}</TextInput>
    </DeskSection>
  </Block>
</template>
```

### Footer Block

All links ('`a`' tags) should have a `h5` tag applied

```vue
<template>
  <Block :block="block">
    <a href="...">
      <Text component="h5" kind="link" blockType="link" />
    </a>
  </Block>
</template>
```
