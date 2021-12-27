---
title: Portal
description: ''
position: 22
category: Hero Blocks
---

`Portal` allows content to escape width restrictions of a `Block` or `HeroBlock`.

<alert Type="info"> Portal will render content at the end of the root div. This lets you to build something like a sidebar menu. </alert>

#### CAVEATS:

1. You should only use this component in the `HeroBlock`, and **only once.**
2. It only allows a single child inside it:

   ```vue
   // THIS WILL BREAK
   <Portal>
     <div>
       <!-- content -->
     </div>
     <div>
       <!-- content -->
     </div>
   </Portal>

   // Correct
   <Portal>
     <div>
       <!-- content -->
     </div>
   </Portal>
   ```

3. Because of the restrictions of Vue 2, the content will be sent to another block and will not inherit the styles from the element with same `kind` in the `Block`.
4. This component uses [`portal-vue`](https://github.com/LinusBorg/portal-vue) internally so it will have same [caveats](https://portal-vue.linusb.org/guide/caveats.html). However, in normal use, you should only need to take special care of the [`ref problem`](https://portal-vue.linusb.org/guide/caveats.html#refs)

<table>
  <tr>
    <td>Props</td>
    <td>Type</td>
    <td>Mandatory?</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>open</td>
    <td>boolean</td>
    <td>✅</td>
    <td>Use to control it open or close</td>
  </tr>
</table>

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
    <Portal>
      <!-- content will be render at the end of root div element -->
    </Portal>
  </HeroBlock>
</template>
```
