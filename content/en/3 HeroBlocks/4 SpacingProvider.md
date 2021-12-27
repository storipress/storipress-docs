---
title: Spacing Provider
description: ''
position: 24
category: Hero Blocks
---

This provider restricts the width of non-hero blocks.

<alert Type="warning">THIS IS A MANDATORY COMPONENT FOR ALL HERO BLOCKS.</alert>

- To use the `SpacingProvider`, you will be required to provide a number, e.g. `80`. This number sets the width of all other blocks on a page. With `80` set, this means all other blocks are set to width 80% and aligned centre.

- The content in this component will also have the same width restrictions.

![](/Blocks/HeroBlocks_1.png)
![](/Blocks/HeroBlocks_2.png)

<alert Type="info">`SpacingProvider` does not control width of the Hero block. Hero blocks have separate widths. provider.</alert>

<alert Type="warning">Only use this component inside a `HeroBlock` and only use it once. </alert>

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>width</td>
    <td>string</td>
    <td>❌</td>
    <td>Defaults to auto. See description below</td>
  </tr>
  <tr>
    <td>max</td>
    <td>string</td>
    <td>❌</td>
    <td>max-width , the rule for values is same as width</td>
  </tr>
  <tr>
    <td>min</td>
    <td>string</td>
    <td>❌</td>
    <td>min-width, the rule for values is same as width</td>
  </tr>
</table>

<alert type="info">The type of value used here is a `string`, i.e. `width="80vw"` → `width: 80vw`</alert>

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>The content</td>
  </tr>
</table>

#### Example:

```vue
<template>
  <HeroBlock :block="block">
    <SpacingProvider>
      <!-- content -->
    </SpacingProvider>
  </HeroBlock>
</template>
```

<alert Type="info">

It highly recommended that you set different widths for different breakpoints; much like the `TextElement`. For example:

<br>

`{ xs: 100, md: 80 }` -> `100%` for `xs` and `80%` for viewport >= `md`

</alert>

#### SpacingProvider with only width values.

```vue
<SpacingProvider :width="{ xs: '100%', md: '80%' }">
  <!-- content -->
</SpacingProvider>
```

#### SpacingProvider with only max width (works like a Tailwind container)

```vue
<SpacingProvider :max="{ xs: 'auto', md: '768px' lg: '1070px' }">
  <!-- content -->
</SpacingProvider>
```

#### SpacingProvider with both width + max width restrictions.

```vue
<SpacingProvider :width="{ md: '80%' }" :max="{ md: '768px', lg: '1070px' }">
  <!-- content -->
</SpacingProvider>
```
