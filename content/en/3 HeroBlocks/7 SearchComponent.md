---
title: Site Search
description: ''
position: 27
category: Hero Blocks
---

The `SearchElement` is a component which enables a publication's readers to search its entire catalogue of articles. This component is most commonly used in navbars.

<alert type="warning">You should only use this component in the `HeroBlock`, **and only once**.</alert>

- The default icon is a magnifying glass. You customize the icon by adding your own SVG file.

<table>
  <tr>
    <td>slots</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>The custom icon</td>
  </tr>
</table>

#### Example:

```vue
<template>
  <HeroBlock :block="block">
    <SearchElement />
  </HeroBlock>
</template>
```

#### Example custom `SearchElement` icon

```vue
<template>
  <HeroBlock :block="block">
    <SearchElement>
      <!-- customized icon -->
      <img class="w-8 h-8" src="path/to/yourIcon" />
    </SearchElement>
  </HeroBlock>
</template>
```
