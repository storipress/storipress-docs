---
title: PageList Provider
description: ''
position: 23
category: Hero Blocks
---

This provider gives you a list of all static pages in a publication.

Unlike `DeskSection` or `Article`, you will get same list every time this component is used.

<alert type="warning">Only use this list when it is absolutely needed, e.g. in navbars and menus.</alert>

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
  desks: Page[]
}
interface Page {
  id: string
  name: string
  url: string
}
```

  </code-block>
    </td>
  </tr>
</table>

#### Example:

```vue
<template>
  <HeroBlock :block="block">
    <PageList v-slot="{ pages }">
      <!-- content... -->
    </PageList>
  </HeroBlock>
</template>
```
