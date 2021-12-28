---
title: Wrappers
description: ''
position: 12
category: Standard Blocks
---

Storipress requires you to wrap your block UI within two wrappers. These wrappers tell Storipress how to dynamically insert articles.

## `<Block>`

<alert Type="info">
All blocks must be wrapped inside this component. Your block must accept a block prop and pass it to the Block component.
</alert>

```vue
<template>
  <Block :block="block">
    <!-- content... -->
  </Block>
</template>
```

| Props           | Type      | Mandatory? | Description                                                                                      |
| --------------- | --------- | ---------- | ------------------------------------------------------------------------------------------------ |
| block           | `object`  | ✅         | font size (valid range: 8 ~ 280)                                                                 |
| backgroundColor | `string`  | ❌         | The color hex code without the # prefix. It also supports object form for responsive config      |
| full            | `boolean` | ❌         | When `full` is true, the block component will not to add `.spacing` and block will be full width |

| slots   | Description       |
| ------- | ----------------- |
| Default | The block content |

## `<DeskSection>`

```vue
<template>
  <Block :block="block">
    <DeskSection :order="0" v-slot="{ desk }">
      <!-- content... -->
    </DeskSection>
  </Block>
</template>
```

<alert Type="info">Wrap a block's desk sections in this wrapper</alert>

| Props   | Type     | Mandatory? |
| ------- | -------- | ---------- |
| `Order` | `number` | ✅         |

<alert Type="info">Please make `order` increase as follow order showed visually

1. left to right
2. top to down

</alert>

#### Slots

- #### `Default`

  The desk content; e.g.

  interface {
  /// Desk name
  desk: string
  }
