---
title: Hero Block Wrapper
description: ''
position: 25
category: Hero Blocks
---

The `HeroBlock` is the first block in a page. All hero blocks must be wrapped within this component.

Like the standard Block Wrapper, the Hero Block wrapper wraps the Hero Block.

However, the difference is that the `HeroBlock` imposes a width restriction for any standard Block Wrappers (`block`). `block` wraps your content inside a `spacing` component, with the width of the `spacing` component being set by the restrictions specified in the `HeroBlock`.

<alert Type="info">Your block must accept a `block` prop and pass it to the `Block` component</alert>

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>block</td>
    <td>object</td>
    <td>✅</td>
    <td>An opaque object, you must pass it</td>
  </tr>
  <tr>
    <td>backgroundColor</td>
    <td>string</td>
    <td>❌</td>
    <td>The color hex code without the # prefix. It also supports object form for responsive config</td>
  </tr>
</table>

<table>
  <tr>
    <td>slots</td><td>Description</td>
  </tr>
  <tr>
    <td>Default</td>
    <td>The block content</td>
  </tr>
</table>

#### Example:

```vue
<template>
  <HeroBlock :block="block">
    <!-- please see below `Nav` -->
    <Navbar />
    <!-- content... -->
  </HeroBlock>
</template>
```
